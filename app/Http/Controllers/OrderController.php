<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

use App\Http\Requests\OrderStoreRequest;
class OrderController extends Controller
{
    // all orders
    public function index()
    {
        $orders = Order::all();
        return $orders;
    }

    /**
     * Create a new order instance
     *
     * @param  array  $data
     * @return \App\Models\Order
     */
    protected function create(OrderStoreRequest $request)
    {
        $totals = $request->quantity * $request->price;
        $order = Order::create([
           'product_id' => $request->product_id,
           'customer_id' => $request->customer_id,
           'quantity' => $request->quantity,
           'price' => $request->price,
           'totals' => $totals,
        ]);
        return response()->json('Order Data successfully added');
    }
    // edit orders
    public function edit($id)
    {
        $order = Order::find($id);
        return response()->json($order);
    }
    // update orders
    public function update($id, Request $request)
    {
        $order = Order::find($id);
        $order->update($request->all());
        return response()->json('Order Data successfully updated');
    }
    // delete orders
    public function delete($id)
    {
        $order = Order::find($id);
        $order->delete();
        return response()->json('The orders successfully deleted');
    }
}
