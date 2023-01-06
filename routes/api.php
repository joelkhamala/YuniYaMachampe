<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\SalesController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//Allusers data
Route::get('users', [CategoryController::class, 'usersAll']);

//Categories routes
Route::get('category', [CategoryController::class, 'index']);
Route::group(['prefix' => 'category'], function () {
    Route::post('add', [CategoryController::class, 'create']);
    Route::get('edit/{id}', [CategoryController::class, 'edit']);
    Route::put('update/{id}', [CategoryController::class, 'update']);
    Route::delete('delete/{id}', [CategoryController::class, 'delete']);
});

//Products routes
Route::get('product', [ProductController::class, 'index']);
Route::group(['prefix' => 'product'], function () {
    Route::post('add', [ProductController::class, 'create']);
    Route::get('edit/{id}', [ProductController::class, 'edit']);
    Route::get('restock', [ProductController::class, 'getRestockMessage']);
    Route::put('update/{id}', [ProductController::class, 'update']);
    Route::delete('delete/{id}', [ProductController::class, 'delete']);
});

//Suppliers routes
Route::get('supplier', [SupplierController::class, 'index']);
Route::group(['prefix' => 'supplier'], function () {
    Route::post('add', [SupplierController::class, 'create']);
    Route::get('edit/{id}', [SupplierController::class, 'edit']);
    Route::put('update/{id}', [SupplierController::class, 'update']);
    Route::delete('delete/{id}', [SupplierController::class, 'delete']);
});

//Customers routes
Route::get('customer', [CustomerController::class, 'index']);
Route::group(['prefix' => 'customer'], function () {
    Route::post('add', [CustomerController::class, 'create']);
    Route::get('edit/{id}', [CustomerController::class, 'edit']);
    Route::put('update/{id}', [CustomerController::class, 'update']);
    Route::delete('delete/{id}', [CustomerController::class, 'delete']);
});

//Orders routes
Route::get('order', [OrderController::class, 'index']);
Route::group(['prefix' => 'order'], function () {
    Route::post('add', [OrderController::class, 'create']);
    Route::get('edit/{id}', [OrderController::class, 'edit']);
    Route::put('update/{id}', [OrderController::class, 'update']);
    Route::delete('delete/{id}', [OrderController::class, 'delete']);
});

//Sales routes
Route::get('sales', [SalesController::class, 'index']);
Route::group(['prefix' => 'sales'], function () {
    Route::post('add', [SalesController::class, 'create']);
    Route::post('view', [SalesController::class, 'viewSales']);
    Route::get('edit/{id}', [SalesController::class, 'edit']);
    Route::put('update/{id}', [SalesController::class, 'update']);
    Route::delete('delete/{id}', [SalesController::class, 'delete']);
});
