<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');



$routes->post('/register', 'UserController::register');
$routes->post('/loginAuth', 'UserController::loginAuth');
$routes->get('/logout', 'UserController::logout');

$routes->get('/registerData', 'UserController::registerData');

$routes->post('/deleteUser', 'UserController::deleteUser');


$routes->post('/submit-feedback', 'FeedbackController::submitFeedback');
$routes->get('/notification', 'FeedbackController::getNotifications');
