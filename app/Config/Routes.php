<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');



$routes->post('/register', 'UserController::register');
$routes->post('/loginAuth', 'UserController::loginAuth');
$routes->post('/logout', 'UserController::logout');
$routes->get('/registerData', 'UserController::registerData');
$routes->get('/registerDataa', 'UserController::registerDataa');
$routes->get('/totalplanholder', 'UserController::totalPlanHolders');

$routes->post('/updatePlanHolder', 'AgentController::updatePlanHolder');

$routes->post('/deleteUser', 'UserController::deleteUser');

$routes->get('/agentData', 'AgentController::agentData');
$routes->post('/agentregister', 'UserController::agentregister');

$routes->post('/submit-feedback', 'FeedbackController::submitFeedback');
$routes->get('/notification', 'FeedbackController::getNotifications');

$routes->get('/getPayment', 'AgentController::getPayment');
$routes->post('/insertPayment', 'AgentController::insertPayment');
$routes->post('/deletePayment', 'AgentController::deletePayment');
$routes->post('/updatePayment', 'AgentController::updatePayment');

$routes->get('/totallocationpercentage', 'Dashboard::totallocationpercentage');
$routes->get('/collection', 'Dashboard::collection');
$routes->get('/services', 'Dashboard::services');


$routes->get('/getannouncement', 'Announcement::getannouncement');
$routes->post('/postannouncement', 'Announcement::postannouncement');

$routes->get('getAdminProfiles', 'ChatController::getAdminProfiles');
$routes->get('getAgentProfiles', 'ChatController::getAgentProfiles');
$routes->get('getmessageAdmin', 'ChatController::getmessageAdmin');
$routes->get('getmessageAgent', 'ChatController::getmessageAgent');
$routes->get('getmessagePlanHolder', 'ChatController::getmessagePlanHolder');
$routes->post('messageForAdmin', 'ChatController::messageForAdmin');
$routes->post('messageForAgent', 'ChatController::messageForAgent');

