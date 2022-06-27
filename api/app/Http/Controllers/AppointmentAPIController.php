<?php

namespace App\Http\Controllers;

use App\Appointment;
use Illuminate\Http\Request;

class AppointmentAPIController extends Controller
{
    public function index()
    {
        return "Appointment API";
    }

    // add appointments
    public function addAppointments(Request $request)
    {
        validator($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'doctor_name' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'message' => 'required',
            'priority' => 'required',
        ])->validate();

        $appointments = new Appointment();
        $appointments->first_name = $request->first_name;
        $appointments->middle_name = $request->middle_name;
        $appointments->last_name = $request->last_name;
        $appointments->doctor_name = $request->doctor_name;
        $appointments->email = $request->email;
        $appointments->phone = $request->phone;
        $appointments->address = $request->address;
        $appointments->date = $request->date;
        $appointments->time = $request->time;
        $appointments->message = $request->message;
        $appointments->priority = $request->priority;
        $appointments->save();
        return response()->json(['success' => true, 'message' => 'Appointment added successfully']);
    }

    // update appointments
    public function updateAppointments(Request $request)
    {
        validator($request->all(), [
            'id' => 'required|integer',
            'first_name' => 'required',
            'last_name' => 'required',
            'doctor_name' => 'required',
            'phone' => 'required',
            'address' => 'required',
            'message' => 'required',
            'priority' => 'required',
        ])->validate();

        $appointments = Appointment::find($request->id);
        $appointments->first_name = $request->first_name;
        $appointments->middle_name = $request->middle_name;
        $appointments->last_name = $request->last_name;
        $appointments->doctor_name = $request->doctor_name;
        $appointments->email = $request->email;
        $appointments->phone = $request->phone;
        $appointments->address = $request->address;
        $appointments->date = $request->date;
        $appointments->time = $request->time;
        $appointments->message = $request->message;
        $appointments->priority = $request->priority;
        $appointments->save();
        return response()->json(['success' => true, 'message' => 'Appointment updated successfully']);
    }

    // delete appointments
    public function deleteAppointments(Request $request)
    {
        validator($request->all(), [
            'id' => 'required|integer',
        ])->validate();

        $appointments = Appointment::find($request->id);
        $appointments->delete();
        return response()->json(['success' => true, 'message' => 'Appointment deleted successfully']);
    }

    // get single appointments
    public function getSingleAppointments(Request $request)
    {
        validator($request->all(), [
            'id' => 'required|integer',
        ])->validate();

        $appointments = Appointment::find($request->id);
        return response()->json(['success' => true, 'data' => $appointments]);
    }

    // get all appointments
    public function getAllAppointments()
    {
        $appointments = Appointment::all();
        return response()->json(['success' => true, 'data' => $appointments]);
    }
}
