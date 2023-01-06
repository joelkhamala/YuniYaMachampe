<?php

namespace App\Http\Controllers;

use App\Models\Supplier;
use Illuminate\Http\Request;

use App\Http\Requests\SupplierStoreRequest;

class SupplierController extends Controller
{
     // all suppliers
     public function index()
     {
         $suppliers = Supplier::all();
         return $suppliers;
     }
 
     /**
      * Create a new supplier instance
      *
      * @param  array  $data
      * @return \App\Models\Supplier
      */
     protected function create(SupplierStoreRequest $request)
     {
         $supplier = Supplier::create([
            'suppliername' => $request->suppliername,
            'supplierdescription' => $request->supplierdescription,
            'category_id' => $request->category_id,
            'contact' => $request->contact,
            'address' => $request->address,
         ]);
         return response()->json('Supplier Data successfully added');
     }
     // edit suppliers
     public function edit($id)
     {
         $supplier = Supplier::find($id);
         return response()->json($supplier);
     }
     // update suppliers
     public function update($id, Request $request)
     {
         $supplier = Supplier::find($id);
         $supplier->update($request->all());
         return response()->json('Supplier Data successfully updated');
     }
     // delete suppliers
     public function delete($id)
     {
         $supplier = Supplier::find($id);
         $supplier->delete();
         return response()->json('Supplier successfully deleted');
     }
}
