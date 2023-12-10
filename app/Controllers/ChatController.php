<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\RestFul\ResourceController;
use App\Models\UserAccount;
use App\Models\Chat;

class ChatController extends ResourceController
{
    private $userAccounts;
    private $chat;

    public function __construct()
    {
        // It's better to use dependency injection in the constructor
        $this->userAccounts = new UserAccount();
        $this->chat = new Chat();
    }
    public function index()
    {
        //
    }
    public function getAdminProfiles()
    {
        $data = $this->userAccounts
        ->select('Email, Role')
        ->where('Role', 2)
        ->findAll();
        return $this->respond($data, 200);
    }
    public function getAgentProfiles()
    {
        $data = $this->userAccounts
        ->select('Email, Role')
        ->where('Role', 3)
        ->findAll();
        return $this->respond($data, 200);
    }
    public function getmessageAdmin()
{
    $data = $this->chat
        ->select('realtimechat.ChatId, realtimechat.UserId, realtimechat.Message, users.UserId,users.Email, users.Role') // Removed the extra comma at the end
        ->join('users', 'realtimechat.UserId = users.UserId')
        ->where('users.Role', 'Admin') // Added single quotes around 'PlanHolder'
        ->findAll();
    // Respond with the data
    return $this->respond($data, 200);
}
public function getmessageAgent()
{
    $data = $this->chat
        ->select('realtimechat.ChatId, realtimechat.UserId, realtimechat.Message, users.UserId, users.Role') // Removed the extra comma at the end
        ->join('users', 'realtimechat.UserId = users.UserId')
        ->where('users.Role', 'PlanHolder') // Added single quotes around 'PlanHolder'
        ->findAll();

    // Respond with the data
    return $this->respond($data, 200);
}
public function getmessagePlanHolder()
{
    $data = $this->chat
    ->select('realtimechat.ChatId, realtimechat.UserId, realtimechat.Message, users.UserId,users.Email, users.Role') // Removed the extra comma at the end
    ->join('users', 'realtimechat.UserId = users.UserId')
    ->where('users.Role', 'PlanHolder') // Added single quotes around 'PlanHolder'
    ->findAll();
    // Respond with the data
    return $this->respond($data, 200);
}

    public function messageForAgent(){

    }
    public function messageForAdmin(){
        $json = $this->request->getJSON();

    // Get user details using FirstName and LastName
    $user = $this->userAccounts
        ->where('Email', $json->Email)
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
        'Message'    => $json->Message,
    ];

    // Insert the payment data into the database using your model
    $this->chat->insert($data);

    // Respond with a success message
    return $this->respond(['message' => 'Payment inserted successfully'], 200);
    }
    
}
