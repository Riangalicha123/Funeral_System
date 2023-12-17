<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\RestFul\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\UserAccount;
use \Firebase\JWT\JWT;

class UserController extends ResourceController
{
    private $userAccounts;


    public function index()
    {
        //
    }

    public function __construct()
    {
        $this->userAccounts = new UserAccount();
    }
    public function registerData()
    {
        $data = $this->userAccounts
        ->select('UserId, FirstName, MiddleName, LastName, Address, ContactNumber, Role')
        ->where('Role', 1)
        ->findAll();
        return $this->respond($data, 200);
    }


    public function register()
    {
        helper(['form']);
        $rules = [
            'FirstName' => ['rules' => 'required|max_length[255]'],
            'MiddleName' => ['rules' => 'max_length[255]'],
            'LastName' => ['rules' => 'required|max_length[255]'],
            'Email' => ['rules' => 'required|min_length[4]|max_length[255]|valid_email'],
            'Password' => ['rules' => 'required|min_length[8]|max_length[255]'],
            'Address' => ['rules' => 'required|min_length[8]|max_length[255]'],
            'ContactNumber' => ['rules' => 'required|max_length[11]'],
            'confirmPassword' => ['rules' => 'required|matches[Password]']
        ];
        if ($this->validate($rules)) {
            $json = $this->request->getJSON();
            $data = [
                "FirstName" => $json->FirstName,
                "MiddleName" => $json->MiddleName,
                "LastName" => $json->LastName,
                "Email" => $json->Email,
                "Password" => password_hash($json->Password, PASSWORD_DEFAULT),
                "Address" => $json->Address,
                "ContactNumber" => $json->ContactNumber,
                'Role' => 'PlanHolder'
            ];

            $this->userAccounts->save($data);
            return $this->respond(['message' => 'Registered Successfully'], 200);
        } else {
            $response = [
                'error' => $this->validator->getErrors(),
                'message' => 'Invalid Inputs'
            ];
            return $this->respond($response);
        }
    }
    public function agentregister()
    {
        helper(['form']);
        $rules = [
            'FirstName' => ['rules' => 'required|max_length[255]'],
            'MiddleName' => ['rules' => 'max_length[255]'],
            'LastName' => ['rules' => 'required|max_length[255]'],
            'Email' => ['rules' => 'required|min_length[4]|max_length[255]|valid_email'],
            'Password' => ['rules' => 'required|min_length[8]|max_length[255]'],
            'Address' => ['rules' => 'required|min_length[8]|max_length[255]'],
            'ContactNumber' => ['rules' => 'required|max_length[11]'],
        ];
        if ($this->validate($rules)) {
            $json = $this->request->getJSON();
            $data = [
                "FirstName" => $json->FirstName,
                "MiddleName" => $json->MiddleName,
                "LastName" => $json->LastName,
                "Email" => $json->Email,
                "Password" => password_hash($json->Password, PASSWORD_DEFAULT),
                "Address" => $json->Address,
                "ContactNumber" => $json->ContactNumber,
                'Role' => 'Agent'
            ];

            $this->userAccounts->save($data);
            return $this->respond(['message' => 'Registered Successfully'], 200);
        } else {
            $response = [
                'error' => $this->validator->getErrors(),
                'message' => 'Invalid Inputs'
            ];
            return $this->respond($response);
        }
    }
    /* public function deleteUser()
    {
        $json = $this->request->getJSON();
        $userId = $json->UserId;

        // Check if the user exists
        $user = $this->userAccounts->find($userId);

        if ($user) {
            // User found, proceed with deletion
            $this->userAccounts->delete($userId);
            return $this->respond(['message' => 'User deleted successfully'], 200);
        } else {
            // User not found
            return $this->respond(['message' => 'User not found'], 404);
        }
    } */
    public function deleteUser()
    {
        try {
            $UserId = $this->request->getVar('UserId');

            $this->userAccounts->delete(['UserId' => $UserId]);

            return $this->respond(['message' => 'Record Deleted Successfully']);
        } catch (\Throwable $th) {
            return $this->respond(["error" => "Error" . $th->getMessage()]);
        }
    }

    /* 
    
    public function updateUser()
    {
        $json = $this->request->getJSON();
        $userId = $json->UserId;

        // Check if the user exists
        $user = $this->userAccounts->find($userId);

        if ($user) {
            // User found, proceed with update
            helper(['form']);
            $rules = [
                'FirstName' => ['rules' => 'required|max_length[255]'],
                'MiddleName' => ['rules' => 'max_length[255]'],
                'LastName' => ['rules' => 'required|max_length[255]'],
                'Email' => ['rules' => "required|min_length[4]|max_length[255]|valid_email|is_unique[user_accounts.Email,id,$userId]"],
                'Password' => ['rules' => 'min_length[8]|max_length[255]'],
                'Address' => ['rules' => 'required|min_length[8]|max_length[255]'],
                'ContactNumber' => ['rules' => 'required|max_length[11]'],
                'confirmPassword' => ['rules' => 'matches[Password]']
            ];

            if ($this->validate($rules)) {
                $data = [
                    "FirstName" => $json->FirstName,
                    "MiddleName" => $json->MiddleName,
                    "LastName" => $json->LastName,
                    "Email" => $json->Email,
                    "Address" => $json->Address,
                    "ContactNumber" => $json->ContactNumber,
                ];

                if (!empty($json->Password)) {
                    $data['Password'] = password_hash($json->Password, PASSWORD_DEFAULT);
                }

                $this->userAccounts->update($userId, $data);
                return $this->respond(['message' => 'User updated successfully'], 200);
            } else {
                $response = [
                    'error' => $this->validator->getErrors(),
                    'message' => 'Invalid Inputs'
                ];
                return $this->respond($response);
            }
        } else {
            // User not found
            return $this->respond(['message' => 'User not found'], 404);
        }
    } */


    public function loginAuth()
    {
        $json = $this->request->getJSON();

        $Email = $json->Email;
        $Password = $json->Password;

        $user = $this->userAccounts->where('Email', $Email)->first();

        if(is_null($user)) {

            return $this->respond(['error' => 'Invalid email or password.'], 401);
        }
   
        $pwd_verify = password_verify($Password, $user['Password']);
   
        if(!$pwd_verify) {
            return $this->respond(['error' => 'Invalid email or password.'], 401);
        }
  
        $key = getenv('JWT_SECRET');
        $iat = time(); // current timestamp value
        $exp = $iat + 3600;
  
        $payload = array(
            "iss" => "Issuer of the JWT",
            "aud" => $user['Role'],
            "sub" => $user['LastName'],
            "iat" => $iat, //Time the JWT issued at
            "exp" => $exp, // Expiration time of token
            "email" => $user['Email'],
        );
        
          
        $token = JWT::encode($payload, $key, 'HS256');
  
        $response = [
            'message' => 'Login Succesful',
            'token' => $token
        ];
          
        return $this->respond($response, 200);
    }
    public function logout(){
        $response = [
            'message' => 'Logout Successful',
        ];
    
        return $this->respond($response, 200);
    }
    
}
