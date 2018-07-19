@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col s12 text-center">
            
            @if (session('status'))
                <div class="alert alert-success" role="alert">
                    {{ session('status') }}
                </div>
            @endif

            <div class="col s1"></div>
            
            <div class="col s11">
                <img class="responsive-img" src='./images/TB-Logo-Better.png'>
            </div>
            <div class="row justify-content-center">
            <div class="col s12 center-align">
            <h5>Welcome {{ Auth::user()->name }}! Your Adventure Begins Now!</h5>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col s12 center-align">

            <a class="waves-effect waves-light btn"><i class="material-icons left">add</i>Add Character</a>
           
        </div>
    </div>

    <div class="row valign-wrapper">
        
        <div class ="col s3 center">Blah</div>
        <div class ="col s3 center">Blah</div>
        <div class ="col s3 center">Blah</div>
        <div class ="col s3 center">Blah</div>
    </div>
</div>
@endsection
