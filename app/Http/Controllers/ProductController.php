<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

use App\Http\Requests\ProductStoreRequest;

class ProductController extends Controller
{
     // all products
     public function index()
     {
         $products = Product::all();
         return response()->json($products);
     }

     public function getRestockMessage()
     {
        //  $products = Product::where('lowestquantity' ,'<',  'quantity')->get();
        //  $products = Product::with('productname')->whereRaw('quantity <= lowestquantity')->get();
        $products = Product::all();
        $product =[];
        foreach($products as $pro)
        {
            $lowestquantity = Product::where('id', $pro['id'])->value('lowestquantity');
            $product = Product::where('quantity', '<', (int)$lowestquantity)->get();
        }
         return response()->json($product);
     }
 
     /**
      * Create a new product instance
      *
      * @param  array  $data
      * @return \App\Models\Product
      */
     protected function create(ProductStoreRequest $request)
     {
         $product = Product::create([
            'productname' => $request->productname,
            'productdescription' => $request->productdescription,
            'category_id' => $request->category_id,
            'supplier_id' => 1,
            // 'supplier_id' => $request->supplier_id,
            'quantity' => $request->quantity,
            'lowestquantity' => $request->lowestquantity,
            'price' => $request->price,
         ]);
         return response()->json('Product Data successfully added');
     }
     // edit products
     public function edit($id)
     {
         $product = Product::find($id);
         return response()->json($product);
     }
     // update products
     public function update($id, Request $request)
     {
         $product = Product::find($id);
         $product->update($request->all());
         return response()->json('Product Data successfully updated');
     }
     // delete products
     public function delete($id)
     {
         $product = Product::find($id);
         $product->delete();
         return response()->json('The products successfully deleted');
     }
}
