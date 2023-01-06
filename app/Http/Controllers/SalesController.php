<?php

namespace App\Http\Controllers;

use \Response;
use App\Models\Sales;
use App\Models\Order;
use App\Models\Product;
use App\Models\Customer;
use Illuminate\Http\Request;

use App\Http\Requests\SalesStoreRequest;
class SalesController extends Controller
{
     // all sales
     public function index()
     {
         $sale = Sales::all();
         $sales = [];
         foreach($sale as $sal)
         {
            $sales = Order::where('id', $sal['order_id'])->get();
         }
         return $sales;
     }
 
     /**
      * Create a new sale instance
      *
      * @param  array  $data
      * @return \App\Models\Sales
      */
     protected function create(SalesStoreRequest $request)
     {
         $sale = Sales::create([
            'order_id' => $request->order_id,
         ]);
         $quantity = Order::where('id', $request->order_id)->value('quantity');
         $product_id = Order::where('id', $request->order_id)->value('product_id');
         $customer_id = Order::where('id', $request->order_id)->value('customer_id');
         $frequency = Customer::where('id', $customer_id)->value('frequency_of_purchase');
         $initialproductquantity = Product::where('id', $product_id)->value('quantity');

         $freq = $frequency + 1;
         if($initialproductquantity<0)
         {
            return response()->json('Product quantity is leess than 0');
         }
         else
         {
            $newquantity = $initialproductquantity - $quantity;
            if($sale)
            {
                $updateproduct = Product::where('id', $product_id)
                ->update([
                    'quantity' => $newquantity
                ]);
                $updatecustomers = Customer::where('id', $customer_id)
                ->update([
                    'frequency_of_purchase' => $freq,
                ]);
                $updateOrder = Order::where('id', $request->order_id)
                ->update([
                    'sold' => 1
                ]);
                if($updateproduct && $updatecustomers && $updateOrder)
                {
                    return response()->json('Sales successfully made and product database successfully updated');
                }
                else
                {
                    return response()->json('Error adding data');
                }
            }
        }
     }

     // edit sales
     public function edit($id)
     {
         $sale = Sales::find($id);
         return response()->json($sale);
     }
     // update sales
     public function update($id, Request $request)
     {
         $sale = Sales::find($id);
         $sale->update($request->all());
         return response()->json('Sales Data successfully updated');
     }
     // delete sales
     public function delete($id)
     {
         $sale = Sales::find($id);
         $sale->delete();
         return response()->json('The sales successfully deleted');
     }
}
