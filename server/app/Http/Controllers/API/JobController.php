<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\job_form;

class JobController extends Controller
{
    public function all_jobs()
    {
        try {
            $job_list = job_form::paginate(10);

            return response()->json([
                'jobs' => $job_list,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function get_job($id)
    {
        try {
            if (job_form::findOrFail($id)) {
                $job = job_form::findOrFail($id);
                return response()->json([
                    'job' => $job,
                ]);
            } else {
                return response()->json([
                    'message' => 'invalid request!'
                ]);
            }
        } catch (\Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ]);
        }
    }
}
