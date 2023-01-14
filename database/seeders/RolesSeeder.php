<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('roles')->insert([
            'name' => 'SuperAdmin',
            'slug' => 'super-admin',
            'status' => 'Active',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('roles')->insert([
            'name' => 'Admin',
            'slug' => 'admin',
            'status' => 'Active',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);

        DB::table('roles')->insert([
            'name' => 'Student',
            'slug' => 'student',
            'status' => 'Active',
            'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
        ]);
    }
}
