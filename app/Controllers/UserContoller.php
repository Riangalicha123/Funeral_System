<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\RestFul\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\UserAccount;

class UserController extends ResourceController
{
    private $userAccounts;


    public function index()
    {
        //
    }
    
    public function __construct(){
        $this->userAccounts = new UserAccount();
    }
    public function registerData(){
        $data = $this->userAccounts->findAll();
        return $this->respond($data, 200);

    }
    public function register()
    {   
        helper(['form']);
        $rules = [
            'Username' => ['rules'=>'required|min_length[8]|max_length[255]'],
            'Email' => ['rules' =>'required|min_length[4]|max_length[255]|valid_email'],
            'Password' => ['rules'=>'required|min_length[8]|max_length[255]'],
            'confirmPassword' => ['rules' => 'required|matches[Password]']
        ];
        if ($this->validate($rules)){
            $json = $this->request->getJSON();
            $data = [
                "Username"=> $json->Username,
                "Email"=> $json->Email,
                "Password"=> password_hash($json->Password, PASSWORD_DEFAULT),
                'User_Role' => 'User'
            ];
            
            $this->userAccounts->save($data);
            return $this->respond(['message' => 'Registered Successfully'],200);
        }else{
           $response =[
            'error' => $this->validator->getErrors(),
            'message' => 'Invalid Inputs'
           ];
           return $this->respond($response);
        }
    }
}
