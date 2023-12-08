<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\RestFul\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\UserAccount;
use App\Models\AnnouncementModel;

class Announcement extends ResourceController
{
    private $userAccounts;
    private $announce;

    public function __construct()
    {
        // It's better to use dependency injection in the constructor
        $this->userAccounts = new UserAccount();
        $this->announce = new AnnouncementModel();
    }
    public function index()
    {
        //
    }
    public function getannouncement()
    {
        $data = $this->announce
        ->select('UserId, Message')
        ->findAll();
        return $this->respond($data, 200);
    }
    public function postannouncement()
{
    try {
        // Retrieve data from the request
        $UserId = $this->request->getVar('UserId');
        $Message = $this->request->getVar('Message');

        // Check if UserId is provided in the request
        if ($UserId === null) {
            throw new \Exception("UserId is missing in the request");
        }

        // Prepare data for insertion
        $data = [
            'UserId' => $UserId,
            'Message' => $Message,
        ];

        // Insert data into the database
        $this->announce->insert($data);

        // Respond with a success message
        return $this->respond(['message' => 'Announcement successfully posted'], 200);
    } catch (\Throwable $th) {
        // Log the exception or handle it accordingly
        return $this->respond(['error' => 'Error: ' . $th->getMessage()]);
    }
}


}