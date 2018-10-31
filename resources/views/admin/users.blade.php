@extends('layouts.app')

@section('title')
Manage Users
@endsection

@section('customcss')
.userslist{
    justify-contents: space-evenly;
}
.userlist-ft{
    justify-contents: center !important;
}
.ul-item{
    display: inline-block !important;
}
.ul-item > input span {
    display: block !important;
}
@stop

@section('content')
<section class="main-main-container" style="">
    <div class="title-head">
        <h2><span class="fa fa-user-o"></span> Employees <small>Manage Employees</small></h2>
    </div>

    {{-- <div class="row"> --}}
        <div class="col-md-9">
            {{-- <user-datatable></user-datatable> --}}
            <div class="mybox">
                    <div class="mybox-head userlist row">
                        <div class="ul-item col-md-6">
                            <h6><strong>USERS LIST</strong></h6> 
                        </div>
                        {{-- <div class="ul-item pull-right col-md-6">
                            <div class="input-group">
                                <div class="form-group is-empty">
                                    <input type="text" class="form-control" placeholder="Search Table">
                                </div>
                                <div class="input-group-addon">
                                    <span class="fa fa-search"></span>                
                                </div>
                            </div>             
                        </div>        --}}
                    </div>
                    <div class="mybox-body white-white-bg">
                            <form action="">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <span>Sort by:</span>
                                            <select class="my-input" name="" id="">
                                                <option value="">Name (A - Z)</option>
                                                <option value="">Name (Z - A)</option>
                                                <option value="">Date (Ascending)</option>
                                                <option value="">Date (Descending)</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6 text-right">
                                            <input type="search" class="my-input" placeholder="Search...">
                                            <span class="fa fa-search"></span>
                                        </div>
                                    </div>
                                    </form>
                        <div class="table-responsive" style="margin-top: 10px; max-height: 65vh; overflow:auto">
                                <table class="table table-bordered table-brands">
                                        <thead>
                                            <tr>
                                                <th class="text-center">ID</th>
                                                <th class="">Name</th>
                                                <th>Email</th>
                                                <th>Type</th>
                                                <th>Date Created</th>
                                                <th class="text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody >
                                            <tr>
                                                <td class="text-center">1</td>
                                                <td>MFI</td>
                                                <td>mfi@captivate.com</td>
                                                <td>Client</td>
                                                <td>01-04-2018</td>
                                                <td class="td-actions text-right">
                                                    <button type="button" rel="tooltip" class="btn btn-success btn-simple btn-xs" data-original-title="" title="Edit">
                                                        <i class="fa fa-edit"></i>
                                                    </button>
                                                    <button type="button" rel="tooltip" class="btn btn-danger btn-simple btn-xs" data-original-title="" title="Archive">
                                                        <i class="fa fa-trash-o"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">2</td>
                                                <td>Jenella Sinfuego</td>
                                                <td>jenella@captivate.com</td>
                                                <td>Employee</td>
                                                <td>06-19-2018</td>
                                                <td class="td-actions text-right">
                                                    <button type="button" rel="tooltip" class="btn btn-success btn-simple btn-xs" data-original-title="" title="Edit">
                                                        <i class="fa fa-edit"></i>
                                                    </button>
                                                    <button type="button" rel="tooltip" class="btn btn-danger btn-simple btn-xs" data-original-title="" title="Archive">
                                                        <i class="fa fa-trash-o"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">3</td>
                                                <td>Alyssa Lacsamana</td>
                                                <td>sassy@captivate.com</td>
                                                <td>ACMA</td>
                                                <td>11-05-2016</td>
                                                <td class="td-actions text-right">
                                                    <button type="button" rel="tooltip" class="btn btn-success btn-simple btn-xs" data-original-title="" title="Edit">
                                                        <i class="fa fa-edit"></i>
                                                    </button>
                                                    <button type="button" rel="tooltip" class="btn btn-danger btn-simple btn-xs" data-original-title="" title="Archive">
                                                        <i class="fa fa-trash-o"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="text-center">4</td>
                                                <td>Bryxx Lucerio</td>
                                                <td>bebex@captivate.com</td>
                                                <td>Employee</td>
                                                <td>08-01-2016</td>
                                                <td class="td-actions text-right">
                                                    <button type="button" rel="tooltip" class="btn btn-success btn-simple btn-xs" data-original-title="" title="Edit">
                                                        <i class="fa fa-edit"></i>
                                                    </button>
                                                    <button type="button" rel="tooltip" class="btn btn-danger btn-simple btn-xs" data-original-title="" title="Archive">
                                                        <i class="fa fa-trash-o"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                        </div>
                    </div>
                    <div class="mybox-footer userlist-ft">
                        
                    </div>
                </div>
            {{-- <div class="mybox">
                <div class="mybox-head">
                    <h6><strong>TEAMS LIST</strong></h6>
                </div>
                <div class="mybox-body white-white-bg">
                        <form action="">
                                <div class="row">
                                    <div class="col-md-6">
                                        <span>Sort by:</span>
                                        <select class="my-input" name="" id="">
                                            <option value="">Name (A - Z)</option>
                                            <option value="">Name (Z - A)</option>
                                            <option value="">Date (Ascending)</option>
                                            <option value="">Date (Descending)</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6 text-right">
                                        <input type="search" class="my-input" placeholder="Search...">
                                        <span class="fa fa-search"></span>
                                    </div>
                                </div>
                                </form>
                        <div class="table-responsive" style="margin-top: 10px; max-height: 27vh; overflow:scoll">
                                <table class="table table-bordered table-brands">
                                    <thead>
                                        <tr>
                                            <th class="text-center">ID</th>
                                            <th class="">Team Name</th>
                                            <th>No. of Members</th>
                                            <th>Created</th>
                                            <th class="text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        <tr><a href="">
                                            <td class="text-center">1</td>
                                            <td>Web Team</td>
                                            <td>15</td>
                                            <td>08-12-2019</td>
                                            <td class="td-actions text-right">
                                                <button type="button" rel="tooltip" class="btn btn-success btn-simple btn-xs" data-original-title="" title="Edit">
                                                    <i class="fa fa-edit"></i>
                                                </button>
                                                <button type="button" rel="tooltip" class="btn btn-danger btn-simple btn-xs" data-original-title="" title="Archive">
                                                    <i class="fa fa-trash-o"></i>
                                                </button>
                                            </td>
                                        </a></tr>
                                        <tr><a href="">
                                            <td class="text-center">2</td>
                                            <td>Creatives</td>
                                            <td>23</td>
                                            <td>08-12-2019</td>
                                            <td class="td-actions text-right">
                                                <button type="button" rel="tooltip" class="btn btn-success btn-simple btn-xs" data-original-title="" title="Edit">
                                                    <i class="fa fa-edit"></i>
                                                </button>
                                                <button type="button" rel="tooltip" class="btn btn-danger btn-simple btn-xs" data-original-title="" title="Archive">
                                                    <i class="fa fa-trash-o"></i>
                                                </button>
                                            </td>
                                        </a></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="space-10"></div>
                </div>
            </div> --}}
        </div>
    
        <div class="col-md-3">
            <div class="mybox">
                <div class="mybox-head">
                    <h6 class="noprint"><strong>ADD NEW USER</strong></h6>
                </div>
                <div class="mybox-body white-white-bg">
                        <form class="form">
                                <div class="form-group is-empty">
                                            <label class="control-label">Name</label>
                                            <input type="text" class="form-control">
                                            <span class="material-input"></span>
                                </div>  
                                {{-- <div class="row">
                                    <div class="col-md-6"> --}}
                                            <div class="form-group is-empty">
                                                    <label class="control-label">Email</label>
                                                    <input type="email" class="form-control">
                                                    <span class="material-input"></span>
                                            </div>
                                    {{-- </div> --}}
                                    {{-- <div class="col-md-6"> --}}
                                            <div class="form-group is-empty">
                                                    <label class="control-label">Password</label>
                                                    <input type="password" class="form-control">
                                                    <span class="material-input"></span>
                                            </div>
                                    {{-- </div> --}}
                                {{-- </div> --}}
                                {{-- <div class="row">
                                        <div class="col-md-6"> --}}
                                                <div class="btn-group bootstrap-select">
                                                        <select class="selectpicker" data-style="btn btn-info btn-xs btn-simple" title="Single Select" data-size="7" tabindex="-98">
                                                                {{-- <option class="bs-title-option" value="">Single Select</option> --}}
                                                                <option disabled="" selected="">--Team--</option>
                                                                <option value="2">Creatives</option>
                                                                <option value="3">Web</option>
                                                            </select>
                                                </div>
                                        {{-- </div>
                                        <div class="col-md-6"> --}}
                                                <div class="btn-group bootstrap-select">
                                                        <select class="selectpicker" data-style="btn btn-info btn-xs btn-simple" title="Single Select" data-size="7" tabindex="-98">
                                                                {{-- <option class="bs-title-option" value="">Single Select</option> --}}
                                                                <option disabled="" selected="">--Role--</option>
                                                                <option value="2">Reg. Employee</option>
                                                                {{-- <option value="3">Regular Employee</option> --}}
                                                                <option value="3">ACMA</option>
                                                        </select>
                                                </div>

                                                <p class="note">NOTE: Only employee account can be added here.</p>
                                        {{-- </div> --}}
                                        
                                    </div>
                                    {{-- <p class="note">NOTE: Only employee account can be added here.</p> --}}
                            {{-- </form> --}}
                            <div class="mybox-footer">
                                <div class="row form-group text-center">
                                    <div class="col-md-12">
                                        <button class="btn btn-success btn-sm" type="button" value="submit">+ ADD</button>
                                    </div>
                                </div>
                            </div>
                </div>
                
                </form>
            </div>
            <!--<div class="mybox">
                <div class="mybox-head">
                    <h6><strong>ADD NEW TEAM</strong></h6>
                </div>
                <div class="mybox-body white-white-bg">
                        <form class="form">
                                <div class="form-group is-empty">
                                            <label class="control-label">Team Name</label>
                                            <input type="text" class="form-control">
                                            <span class="material-input"></span>
                                </div>  
                            
                                {{-- <div class="row form-group text-center">
                                    <div class="col-md-12">
                                        <button class="btn btn-success btn-sm" type="button" value="submit">ADD</button>
                                    </div>
                                </div> --}}
                            {{-- </form> --}}
                </div>
                <div class="mybox-footer">
                        {{-- <form class="form">
                                <div class="form-group is-empty">
                                            <label class="control-label">Team Name</label>
                                            <input type="text" class="form-control">
                                            <span class="material-input"></span>
                                </div>  --}}
                            
                                <div class="row form-group text-center">
                                    <div class="col-md-12">
                                        <button class="btn btn-success btn-sm" type="button" value="submit">+ ADD</button>
                                    </div>
                                </div>
                            </form> 
                </div>
            </div>-->
        </div>
    {{-- </div> --}}

</section>
@endsection