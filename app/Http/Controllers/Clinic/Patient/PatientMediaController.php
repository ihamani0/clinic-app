<?php

namespace App\Http\Controllers\Clinic\Patient;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use Illuminate\Http\Request;

class PatientMediaController extends Controller
{


    public function store(Request $request, Patient $patient){

         
        $request->validate([
            'file' => 'required|file|max:10240',
            'collection' => 'required|in:xrays,reports,photos',
        ]);

        $patient
            ->addMediaFromRequest('file')
            ->toMediaCollection($request->collection);
        return back()->with('success', 'File uploaded');
    }


    public function destroy(Patient $patient, $mediaId)
    {
        $media = $patient->media()->findOrFail($mediaId);
        $media->delete();

        return back()->with('success', 'File removed');
    }

}