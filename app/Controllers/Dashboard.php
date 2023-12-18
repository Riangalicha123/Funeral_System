<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\UserAccount;
use App\Models\AgentModel;
use \Firebase\JWT\JWT;

class Dashboard extends ResourceController
{
    private $userAccounts;
    private $paymentcollection;

    public function index()
    {
        // Your index method logic here
    }

    public function __construct()
    {
        $this->userAccounts = new UserAccount();
        $this->paymentcollection = new AgentModel();
    }

    public function totallocationpercentage()
    {
        $addresses = ['Puerto Galera, Oriental Mindoro', 'Baco, Oriental Mindoro', 'Calapan City, Oriental Mindoro', 'San Teodoro, Oriental Mindoro', 'Naujan, Oriental Mindoro'];

        $addressPercentages = [];

        foreach ($addresses as $address) {
            $data = $this->userAccounts
                ->select('Address')
                ->where('Address', $address)
                ->where('Role', 'PlanHolder')
                ->findAll();

            $totalRecords = $this->userAccounts
                ->where('Address', $address)
                ->countAllResults();

            $percentage = ($totalRecords > 0) ? (count($data) / $totalRecords) * 100 : 0;

            $addressPercentages[] = [
                'Address' => $address,
                'PercentagePlanHolder' => $percentage,
            ];
        }

        $response = [
            'addresses' => $addressPercentages,
        ];

        return $this->respond($response, 200);
    }
    public function collection()
    {
        // Execute the SQL query to get monthly payment collection data
        $result = $this->paymentcollection
            ->select('MONTH(`Date`) AS Month, YEAR(`Date`) AS Year, SUM(`Amount`) AS TotalAmount')
            ->groupBy('Year, Month')
            ->orderBy('Year, Month')
            ->findAll();

        // Prepare the response data
        $collectionData = [];
        foreach ($result as $row) {
            $collectionData[] = [
                'Month' => $row['Month'],
                'Year' => $row['Year'],
                'TotalAmount' => $row['TotalAmount'],
            ];
        }

        $response = [
            'monthlyCollection' => $collectionData,
        ];

        return $this->respond($response, 200);
    }
    public function services()
    {
        // Define the services
        $services = ['St. Dominique', 'St. Francis', 'St. Paul', 'St. Therese', 'St. Martin', 'St. Lance'];
    
        // Initialize an array to store service-wise data
        $serviceData = [];
    
        // Loop through each service
        foreach ($services as $service) {
            // Execute the SQL query to get total payment collection data for each service
            $result = $this->paymentcollection
                ->select('Services, SUM(`Amount`) AS TotalAmount')
                ->where('Services', $service)
                ->groupBy('Services')
                ->findAll();
    
            // Check if there is data for the current service
            if (!empty($result)) {
                // Extract TotalAmount from the first row (assuming each service has only one row)
                $totalAmount = $result[0]['TotalAmount'];
    
                // Store the data for the current service
                $serviceData[] = [
                    'Service' => $service,
                    'TotalAmount' => $totalAmount,
                ];
            }
        }
    
        // Prepare the final response
        $response = [
            'servicesData' => $serviceData,
        ];
    
        return $this->respond($response, 200);
    }
    

}
