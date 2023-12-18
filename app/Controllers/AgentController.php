<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\RESTful\ResourceController;
use App\Models\UserAccount;
use App\Models\AgentModel;

class AgentController extends ResourceController
{
    private $userAccounts;
    private $agentAcceptance;

    public function __construct()
    {
        // It's better to use dependency injection in the constructor
        $this->userAccounts = new UserAccount();
        $this->agentAcceptance = new AgentModel();
    }

    public function index()
    {
        // This method seems empty, you might want to add some functionality here if needed
    }
    public function agentData()
    {
        $data = $this->userAccounts
        ->select('UserId, FirstName, MiddleName, LastName, Address, ContactNumber, Role')
        ->where('Role', 3)
        ->findAll();
        return $this->respond($data, 200);
    }
    public function agentAddRegister()
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
    public function getPayment()
    {
        // Use CodeIgniter's query builder for better readability
        $data = $this->agentAcceptance
            ->select('paymentacceptance.AcceptanceId,users.UserId, users.FirstName, users.LastName, paymentacceptance.Amount, paymentacceptance.Services, paymentacceptance.Status, paymentacceptance.Date ')
            ->join('users', 'users.UserId = paymentacceptance.UserId')
            ->get()
            ->getResult();

        // Respond with the data
        return $this->respond($data, 200);
    }

    public function insertPayment()
{
    // Retrieve the data sent from the Vue.js component
    $json = $this->request->getJSON();

    // Get user details using FirstName and LastName
    $user = $this->userAccounts
        ->where('FirstName', $json->FirstName)
        ->where('LastName', $json->LastName)
        ->first();

    // Check if the user exists
    if (!$user) {
        // Handle the case where the user is not found
        return $this->respond(['error' => 'User not found for payment'], 404);
    }

    // Check if UserId exists in the user array
    if (!isset($user['UserId'])) {
        // Handle the case where UserId is not found in the user array
        return $this->respond(['error' => 'UserId not found for the user'], 500);
    }

    // Prepare data for payment insertion
    $data = [
        'UserId'    => $user['UserId'], // Access UserId from the user array
        'Amount'    => $json->Amount,
        'Services'  => $json->Services,
        'Status'    => $json->Status,
        'Date'      => $json->Date,
    ];

    // Insert the payment data into the database using your model
    $this->agentAcceptance->insert($data);

    // Respond with a success message
    return $this->respond(['message' => 'Payment inserted successfully'], 200);
}
public function deletePayment()
    {
        try {
            $AcceptanceId = $this->request->getVar('AcceptanceId');

            $this->agentAcceptance->delete(['AcceptanceId' => $AcceptanceId]);

            return $this->respond(['message' => 'Record Deleted Successfully']);
        } catch (\Throwable $th) {
            return $this->respond(["error" => "Error" . $th->getMessage()]);
        }
    }
    public function updatePayment()
    {
        try {
            $AcceptanceId = $this->request->getVar('AcceptanceId');

            $data = [
                'Amount'    => $this->request->getVar('Amount'),
                'Services'  => $this->request->getVar('Services'),
                'Status'    => $this->request->getVar('Status'),
            ];

            $this->agentAcceptance->where('AcceptanceId',$AcceptanceId)->set($data)->update();

            return $this->respond(['message' => 'Record Updated Successfully']);
        } catch (\Throwable $th) {
            return $this->respond(["error" => "Error" . $th->getMessage()]);
        }
    }
    public function Agentregister()
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
    public function updatePlanHolder()
    {
        try {
            $UserId = $this->request->getVar('UserId');

            $data = [
                'FirstName'    => $this->request->getVar('FirstName'),
                'MiddleName'    => $this->request->getVar('MiddleName'),
                'LastName'    => $this->request->getVar('LastName'),
                'Address'    => $this->request->getVar('Address'),
                'Contact'  => $this->request->getVar('Contact'),
            ];

            $this->userAccounts->where('UserId',$UserId)->set($data)->update();

            return $this->respond(['message' => 'Record Updated Successfully']);
        } catch (\Throwable $th) {
            return $this->respond(["error" => "Error" . $th->getMessage()]);
        }
    }
}
