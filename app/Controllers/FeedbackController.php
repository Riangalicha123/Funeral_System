<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;
use App\Models\FeedbackModel;
use App\Models\UserAccount;
use App\Models\Notification;

class FeedbackController extends ResourceController
{
    private $feedbackModel;
    private $userAccount;
    private $notification;

    public function __construct()
    {
        $this->feedbackModel = new FeedbackModel();
        $this->userAccount = new UserAccount();
    }
    public function getNotifications()
    {
        $data = $this->feedbackModel->findAll();
        return $this->respond($data, 200);
    }
    public function submitFeedback()
    {   
        $feedbackData = (array) $this->request->getJSON();

    // Validate the submitted data
    $validationRules = [
        'Email'   => 'required|valid_email|max_length[255]',
        'Message' => 'required',
    ];

    if (!$this->validate($validationRules)) {
        return $this->respond(['error' => $this->validator->getErrors()], 400);
    }

    // Check if the 'Email' key exists in $feedbackData
    if (!isset($feedbackData['Email'])) {
        return $this->respond(['error' => 'Email is missing in feedback data'], 400);
    }

    // Check if the email and UserId exist in the UserAccount table
    $user = $this->userAccount->where([
        'Email'  => $feedbackData['Email'],
    ])->first();

    if (!$user) {
        return $this->respond(['error' => 'User not found'], 404);
    }

    // Save the feedback to the database using the FeedbackModel
    $this->feedbackModel->save($feedbackData);

    return $this->respond(['message' => 'Feedback submitted successfully'], 200);

    }
    // Add the following method in your FeedbackController


}
