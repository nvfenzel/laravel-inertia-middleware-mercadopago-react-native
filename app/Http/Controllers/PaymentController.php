<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function payment()
    {
        require_once 'vendor/autoload.php';

        MercadoPago\SDK::setAccessToken("TEST-dc900d97-cc70-45f1-ad46-2f71a0cd3ab9");
    
        $payment = new MercadoPago\Payment();
        $payment->transaction_amount = (float)$_POST['transactionAmount'];
        $payment->token = $_POST['token'];
        $payment->description = $_POST['description'];
        $payment->installments = (int)$_POST['installments'];
        $payment->payment_method_id = $_POST['paymentMethodId'];
        $payment->issuer_id = (int)$_POST['issuer'];
    
        $payer = new MercadoPago\Payer();
        $payer->email = $_POST['email'];
        $payer->identification = array(
            "type" => $_POST['identificationType'],
            "number" => $_POST['identificationNumber']
        );
        $payment->payer = $payer;
    
        $payment->save();
    
        $response = array(
            'status' => $payment->status,
            'status_detail' => $payment->status_detail,
            'id' => $payment->id
        );
        echo json_encode($response);
    }
}
