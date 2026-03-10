<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('projects')->insert([
            [
                'name' => 'Management of water points and Revenue collection',
                'client' => 'South Sudan Urban Water Corporation',
                'start_date' => 'November 2021',
                'end_date' => 'Ongoing',
                'value' => 187000,
                'description' => 'Water points management and revenue collection services',
                'image' => '/images/gallery/ssuwc-revenue-collection.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Water meters connection',
                'client' => 'South Sudan Urban Water Corporation',
                'start_date' => 'May 2020',
                'end_date' => 'July 2021',
                'value' => 164000000,
                'description' => 'Large-scale water meter connection project',
                'image' => '/images/construction2.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Water Meter installation, repair and maintenance',
                'client' => 'South Sudan Urban Water Corporation',
                'start_date' => 'June 2023',
                'end_date' => 'July 2024',
                'value' => 340000,
                'description' => 'Installation, repair and maintenance of water meters',
                'image' => '/images/construction3.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Management of Solid Waste',
                'client' => 'East Africa Go Green Revenue Collection',
                'start_date' => 'October 2022',
                'end_date' => 'March 2023',
                'value' => 650000,
                'description' => 'Solid waste management and revenue collection',
                'image' => '/images/general-construction2.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Construction of VIP toilets, Pit latrines, Installation of small water distribution system and network',
                'client' => 'Green Kid',
                'start_date' => 'January 2024',
                'end_date' => 'October 2024',
                'value' => 660000,
                'description' => 'Sanitation facilities and water distribution infrastructure',
                'image' => '/images/contruction-building.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Maintenance of water facilities',
                'client' => 'SSUWC',
                'start_date' => 'January 2022',
                'end_date' => 'Ongoing',
                'value' => 160000,
                'description' => 'Ongoing maintenance of water facilities',
                'image' => '/images/contruction-building2.png',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Subcontract for Installation of water Pipeline for Kator residential area',
                'client' => 'Zonghoa Oversea Engineering Construction Company',
                'start_date' => 'June 2020',
                'end_date' => 'December 2023',
                'value' => 1300000,
                'description' => 'Water pipeline installation for Kator residential area',
                'image' => '/images/building.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}

