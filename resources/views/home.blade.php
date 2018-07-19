@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12 text-center">
            

            @if (session('status'))
                <div class="alert alert-success" role="alert">
                    {{ session('status') }}
                </div>
            @endif
            <img class="img-fluid" src='./images/TB-Logo-Better.png'>
        
            <span class="tagline">Welcome {{ Auth::user()->name }}, your Adventure Begins Now!</span>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12 text-center">

            <a class="waves-effect waves-light btn"><i class="material-icons left">add</i>Add Character</a>
            <button href="/addcharacter" type="button" class="btn btn-primary">Primary</button>
            <div id="characters"></div>
        </div>
    </div>

    <div class="row justify-content-center">
        
        <div class ="col s3 center">Blah</div>
        <div class ="col s3 center">Blah</div>
        <div class ="col s3 center">Blah</div>
        <div class ="col s3 center">Blah</div>
    </div>
</div>
@endsection
