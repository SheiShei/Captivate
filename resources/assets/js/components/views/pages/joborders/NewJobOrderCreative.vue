<template>
    <section class="main-main-container" style="">
    <add-member :notmember="boardNotMembers" :board_id="brand.board_id" @refreshBoardMembers="refreshBoardMembers" @addedIds="addMemberToNewBoard" v-if="viewMemmod" @close="toggleJustNewMember"></add-member>
    <div class="jo-wrapper" style="max-height: 100vh; overflow-y: scroll;">
        
        <div class="title-head">
            <h2><span class="fa fa-file-o"></span> Job Order Form - Creatives</h2>
        </div>
        <div class="first-column col-md-1">
        </div>
        <div class="col-md-10">
            <div class="joform shadow">
                <div class="jo-head">
                    <div class="row">
                        <div class="col-md-12">
                            <h4 class="noprint"><span class="fa fa-file-photo-o"></span> Job Order Form <small>(Creatives)</small>
                            &nbsp;&nbsp;&nbsp;
                                <span class="pull-right" v-if="false">
                                    <small>
                                        <span>Status:</span>
                                        <select v-model="brand.status" class="my-input">
                                            <option value="1">Active</option>
                                            <option value="2">Completed</option>
                                            <option value="3">Blocked</option>
                                        </select>
                                    </small>
                                </span>
                            </h4>
                        </div>
                    </div>
                </div>
                <div class="jo-body">
                    <form @submit.prevent="newCreativeJO">
                        <div class="row form-row">
                            <div class="col-md-6 form-group">
                                <label for="jo_name">Name </label>
                                <input required v-model="brand.name" name="jo_name" id="jo_name" type="text" class="form-control">
                            </div>
                            <div class="col-md-6">
                                <label for="brand">Brand:</label>
                                <!-- <div class="btn-group bootstrap-select"> -->
                                    <select v-model="brand.brand_id" required class="my-thin-select my-inp-blk" type="text">
                                        <option value="">---</option>
                                        <option v-for="brand in brands" :key="brand.id" :value="brand.id">{{ brand.name }}</option>
                                    </select>
                                <!-- </div> -->
                            </div>

                            <!-- <div class="col-md-3 form-group">
                                <label for="">ACMA / Brand Owner:</label>
                                <div class="btn-group bootstrap-select">
                                    <select class="selectpicker" data-style="btn btn-sm btn-info btn-simple" type="text">
                                        <option value="">Aya</option>
                                        <option value="">Marley</option>
                                        <option value="">Kwini</option>
                                    </select>
                                </div>
                            </div> -->
                            <!-- <div class="col-md-3 form-group">
                                <label for="" class="align-right">JO No.</label>
                                <img class="pull-right" style="height: 70px" src="/images/above-art1.jpg" alt="">
                            </div> -->
                        </div>
                        <hr />
                        <div class="row form-row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for=""><span class="fa fa-calendar-o text-success"></span> Date In
                                        <small><i> (dd-mm-yyyy)</i></small></label>
                                    <!-- <input required v-model="brand.date_in" class="form-control" type="date" /> -->
                                    <date-picker required disabled @change="changeDateFormat(brand.date_in, 'in')" v-model="brand.date_in" format="MM-DD-YYYY" :not-after="new Date().setDate(new Date().getDate())" lang="en" class="my-inp-blk"></date-picker>
                                </div>
                                <div class="form-group">
                                    <label for=""><span class="fa fa-calendar-o text-danger"></span> Date Due
                                        <small><i> (dd-mm-yyyy)</i></small></label>
                                    <!-- <input required v-model="brand.date_due" class="form-control" type="date" /> -->
                                    <date-picker required @change="changeDateFormat(brand.date_due, 'due')" v-model="brand.date_due" format="MM-DD-YYYY" :not-before="new Date(brand.date_in).setDate(new Date(brand.date_in).getDate()+1)" lang="en" class="my-inp-blk"></date-picker>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-12">
                                        <label for="rqst_type">Usage / Media:</label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="checkbox">
                                            <label>
                                                <input v-model="details.media" type="checkbox" name="optionsCheckboxes" value="1"><span class="check"></span>
                                                IG Post
                                            </label>
                                        </div>
                                        <div class="checkbox">
                                            <label>
                                                <input v-model="details.media" type="checkbox" name="optionsCheckboxes" value="2"><span class="check"></span>
                                                FB Post
                                            </label>
                                        </div>
                                        <div class="checkbox">
                                            <label>
                                                <input v-model="details.media" type="checkbox" name="optionsCheckboxes" value="3"><span class="check"></span>
                                                IG/Messenger Stories
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="checkbox">
                                            <label>
                                                <input v-model="details.media" type="checkbox" name="optionsCheckboxes" value="4"><span class="check"></span>
                                                Cover Photo
                                            </label>
                                        </div>
                                        <div class="checkbox">
                                            <label>
                                                <input v-model="details.media" type="checkbox" name="optionsCheckboxes" value="5"><span class="check"></span>
                                                Branding (New Brand)
                                            </label>
                                        </div>
                                        <div class="checkbox">
                                            <label>
                                                <input v-model="details.media" type="checkbox" name="optionsCheckboxes" value="6"><span class="check"></span>
                                                Trademark Form
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="row">
                            <div class="col-md-4">
                                <div class="row">
                                    <div class="col-md-12">
                                        <label for="rqst_type">Ad Type: &nbsp; &nbsp; &nbsp;</label> 
                                    </div>
                                    <div class="col-md-6">
                                        <div class="checkbox">
                                            <label>
                                                <input v-model="details.ad_type" type="checkbox" name="optionsCheckboxes" value="1"><span class="check"></span>
                                                Carousel
                                            </label>
                                        </div>
                                        <div class="checkbox">
                                            <label>
                                                <input v-model="details.ad_type" type="checkbox" name="optionsCheckboxes" value="2"><span class="check"></span>
                                                Canva
                                            </label>
                                        </div>
                                        <div class="checkbox">
                                            <label>
                                                <input v-model="details.ad_type" type="checkbox" name="optionsCheckboxes" value="3"><span class="check"></span>
                                                Gallery
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="checkbox">
                                            <label>
                                                <input v-model="details.ad_type" type="checkbox" name="optionsCheckboxes" value="4"><span class="check"></span>
                                                Album Type
                                            </label>
                                        </div>
                                        <div class="checkbox">
                                            <label>
                                                <input v-model="details.ad_type" type="checkbox" name="optionsCheckboxes" value="5"><span class="check"></span>
                                                Others
                                            </label>
                                        </div>
                                    </div>
                                </div>     
                            </div>
                            <div class="col-md-8">
                                <div class="row">
                                    <div class="col-md-12">
                                        <label for="rqst_type">File Type: &nbsp;&nbsp;&nbsp;</label>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="checkbox">
                                            <label>
                                                <input  v-model="details.file_type" value="1" type="checkbox" name="optionsCheckboxes"><span class="check"></span>
                                                PDF File
                                            </label>
                                        </div>
                                        <div class="checkbox">
                                            <label>
                                                <input  v-model="details.file_type" value="2" type="checkbox" name="optionsCheckboxes"><span class="check"></span>
                                                JPG File
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="checkbox">
                                            <label>
                                                <input  v-model="details.file_type" value="3" type="checkbox" name="optionsCheckboxes"><span class="check"></span>
                                                GIF File
                                            </label>
                                        </div>
                                        <div class="checkbox">
                                            <label>
                                                <input  v-model="details.file_type" value="4" type="checkbox" name="optionsCheckboxes"><span class="check"></span>
                                                PNG File (Transparent)
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="checkbox">
                                            <label>
                                                <input  v-model="details.file_type" value="5" type="checkbox" name="optionsCheckboxes"><span class="check"></span>
                                                MP4 File / Video
                                            </label>
                                        </div>
                                        <div class="checkbox">
                                            <label>
                                                <input  v-model="details.file_type" value="6" type="checkbox" name="optionsCheckboxes"><span class="check"></span>
                                                Boosted
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <hr> -->
                        <div class="row" v-if="false">
                            <div class="col-md-12">
                                <label class="">Copy on Artwork:</label>
                                <textarea  v-model="details.copy" class="my-text-area btn-block" rows="3" placeholder="Write here. Indicate if any..."></textarea>
                            </div>
                        </div>
                        <hr />
                        <br/>
                        <div class="row">
                            <div class="col-md-6" v-if="boards">
                                <label for="">Board: </label>
                                <p class="text-gray no-margin"><small>Select a board to where all tasks here should be managed.</small></p>
                                <div v-if="justNewBoard==false">
                                    <select required @change="getJOBoardUsers" v-model="brand.board_id" name="board_id" class="my-input my-inp-blk">
                                        <option value="">---</option>
                                        <!-- <option value="new">New Board</option> -->
                                        <option v-for="board in boards" :key="board.id" :value="board.id">{{ board.name }}</option>
                                    </select>
                                    <a @click="toggleJustNewBoard" style="cursor:pointer"><small>or Add New Board</small></a>
                                </div>
                                <div v-if="justNewBoard==true">
                                    <div class="form-group is-empty">
                                        <input @blur="getJOBoardUsers" required v-model="brand.newBoard.name" type="text" class="form-control" placeholder="New Board Name ">
                                        <a @click="toggleJustNewBoard" style="cursor:pointer"><small>or just select from existing boards</small></a>
                                    </div>
                                </div>
                                   
                            </div>
                            <div class="col-md-6">
                                <label>New Task: </label>
                                <button type="button" @click="addNewTask" class="btn btn-success btn-md btn-block">+ Add Tasks</button>
                            </div>
                        </div>
                        <br/>
                        <div class="jo-body" style="background-color: whitesmoke">
                            <div class="row pb-10">
                                <div class="col-md-1">
                                </div>
                                <div class="col-md-10">
                                    <div class="row" id="addtaskdiv">
                                        <div class="col-md-12">
                                            <br/>
                                            <div class="card taskcard" v-for="(task, index) in tasks" :key="index">
                                                <span class="pull-right" @click="deleteTaskForm(index)" style="cursor:pointer"><i class="fa fa-times"></i></span>
                                                <h5 class="text-gray"><span class="fa fa-tasks"></span> Task #{{index+1}}</h5>
                                                <div class="form-row">
                                                    <div class="col-md-7">
                                                        <label for="">Name </label>
                                                        <input v-model="task.name" type="text" class="form-control">
                                                        <label for="">Decription </label>
                                                        <textarea type="text" v-model="task.desc" class="btn-block" placeholder="" ></textarea>
                                                    </div>
                                                    <div class="col-md-5">
                                                        <label for=""><span class="fa fa-user-o"></span> Assign to </label>
                                                        <select v-model="task.assign" class="btn-block" >
                                                            <option value="">--</option>
                                                            <option :value="member.id" v-for="member in boardMembers" :key="member.id">{{ member.name }}</option>
                                                        </select>
                                                        <a @click="toggleJustNewMember" style="cursor:pointer"><small>or Add Member</small></a> <br>
                                                        <label for=""><span class="fa fa-clock-o"></span> Due </label>
                                                        <date-picker required @change="changeDateFormat(task.due, 'task', index)" v-model="task.due" format="MM-DD-YYYY" :not-before="new Date().setDate(new Date().getDate())" :not-after="new Date(brand.date_due).setDate(new Date(brand.date_due).getDate())" lang="en" class="my-inp-blk"></date-picker>
                                                        <label for="" style="margin-top: 8px"><span class="fa fa-file-o"></span> Attach File</label>
                                                        <input id="taskFiles" @change="onFileChange($event, index)" class="btn-block" type="file" multiple>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-1">
                                </div>
                            </div>
                        </div>
                        <!-- <hr /> -->
                        <div class="row" v-if="false">
                            <div class="col-md-12">
                                <label class="">Post Caption:</label>
                                <textarea v-model="details.post_caption" class="my-text-area btn-block" rows="3" placeholder="Write here. Indicate if any..."></textarea>
                            </div>
                        </div>
                        <!-- <hr /> -->
                        <div class="row" v-if="false">
                            <!-- <div class="col-md-3">
                                <label for="rqst_type">Status:</label> 
                                <div class="checkbox mr-10">
                                    <label>
                                        <input  v-model="details.status" value="1" type="radio" name="optionsCheckboxes"><span class="check"></span>
                                        No Revisions
                                    </label>
                                </div>
                                <div class="checkbox mr-10">
                                    <label>
                                        <input  v-model="details.status" value="2" type="radio" name="optionsCheckboxes"><span class="check"></span>
                                        Copy Approved for Post
                                    </label>
                                </div>
                                <div class="checkbox mr-10">
                                    <label>
                                        <input  v-model="details.status" value="3" type="radio" name="optionsCheckboxes"><span class="check"></span>
                                        ACMA/BO Approved for Posting
                                    </label>
                                </div>
                            </div> -->
                            <div class="col-md-8">
                                <label for="rqst_type">Revisions:</label>
                                <textarea  v-model="details.revisions" class="my-text-area btn-block" rows="3" placeholder="Fill up this field if there's a revision"></textarea>
                            </div>
                            <div class="col-md-4">
                                <label for="">Final Sign Off:</label>
                                <div class="checkbox mr-10">
                                    <label>
                                        <input type="checkbox" name="optionsCheckboxes"><span class="check"></span>
                                        Checking this field means you are confirming the final sign off. (?)
                                    </label>
                                </div>
                                <p class="note">Enter email and password for verification.</p>
                                <input type="email" class="form-control" placeholder="email">
                                <input type="password" class="form-control" placeholder="password">
                            </div>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-md-12">
                                <button class="btn btn-success btn-md btn-block" type="submit">
                                    DONE!
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-1">
        </div>

        <div class="modal fade" id="SuccesNewJoC" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-small ">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-close"></i></button>
                        <h4 class="no-margin"><span class="fa fa-check-circle text-success"></span> Success!</h4>
                    </div>
                    <div class="modal-body text-center">
                        <p>A new job order was created successfully.</p>
                        <p class="txt-bold">Do you want to view this JO?</p>
                    </div>
                    <div class="modal-footer text-center">
                        <button @click="notsuccess()" type="button" class="btn btn-sm btn-simple" >Just go to List</button>
                        <button @click="success()" type="button" class="btn btn-sm btn-success btn-simple">Yes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>


<script>
import {mapGetters} from 'vuex';
import AddMember from './AddBoardMember.vue';
import DatePicker from 'vue2-datepicker'
export default {
    components: {
        addMember: AddMember,
        DatePicker
    },
    data(){
        return{
            justNewBoard: false,
            tasks: [
                {
                    name: '', 
                    desc: '', 
                    assign: '', 
                    files: [],
                    due: ''
                }
            ],  
            brand: {
                name: '',
                brand_id: '',
                board_id: '',
                newBoard: {
                    name: '',
                    type: 1,
                    ids: []
                },
                status: 1,
                date_in: new Date(),
                date_due: ''
            },
            details: {
                media: [],
                ad_type: [],
                file_type: [],
                copy: '',
                revisions: '',
                post_caption: ''
            },
            attachments: [],
            viewMemmod: false,
            boardMembers: [],
            boardNotMembers: [],
            joid: ''
        }
    },
    created() {
        $(this.$el).find('.selectpicker').selectpicker('refresh');
        this.$store.dispatch('onCreate')
            .then(() => {
                $(this.$el).find('.selectpicker').selectpicker('refresh');
            })
        this.$store.dispatch('getUserBoards', {type: 1})
            .then(() => {
                $(this.$el).find('.selectpicker').selectpicker('refresh');
            })
    },
    watch: {
        justNewBoard(nv, ov) {
            this.boardMembers = [];
            this.boardNotMembers = [];
            if(nv == false) {
                this.brand.newBoard.name = '';
                this.brand.newBoard.ids = [];
            }
        }
    },
    computed: {
        ...mapGetters({
                brands: 'getBrands',
                boards: 'userBoards',
                cUser: 'currentUser',
            }),        
    },
    methods: {
        addNewTask(){
            this.tasks.push({
                name: '',
                desc: '',
                assign: '', 
                files: [],
                due: ''
            })
            this.scrollToEnd()
        },
        deleteTaskForm(index){
            this.tasks.splice(index,1)
        },
        scrollToEnd(){
            var taskdiv = document.querySelector("#addtaskdiv")
            // var scrollHeight = taskdiv.scrollHeight + 200
            taskdiv.scrollTop = taskdiv.scrollHeight
        },
        newCreativeJO() {
            if(!this.brand.board_id) {
                var index = _.findIndex(this.boardMembers, {id: this.cUser.id});
                this.boardMembers.splice(index, 1);
                this.brand.newBoard.ids = this.boardMembers;
            }
            // console.log(this.brand);
            this.brand.date_in = moment(this.brand.date_in).format('YYYY-MM-DD')
            let form = new FormData;
            form.append('brand', JSON.stringify(this.brand));
            form.append('details', JSON.stringify(this.details));
            form.append('tasks', JSON.stringify(this.tasks));
            for(let i=0; i<this.attachments.length;i++){
                form.append('files[]',this.attachments[i]);
            }
            this.$store.dispatch('newJOC', form)
                .then ((response) => {
                    const jodata = response.data;
                    this.joid = jodata.id;
                    $('#SuccesNewJoC').modal('show');
                })  
        },
        notsuccess() {
            $('#SuccesNewJoC').modal('hide');
            this.$router.push({name: 'all_jo_list'})

        },
        success() {
            $('#SuccesNewJoC').modal('hide');
            this.$router.push({name: 'viewjocreative', params: {jo_id: this.joid}})

        },
        onFileChange(e, index) {
            this.tasks[index].files = [];
            // this.attachments = [];
            let selectedFiles=e.target.files;
            if(!selectedFiles.length){
                return false;
            }
            for(let i=0;i<selectedFiles.length;i++){
                let file = {filename: selectedFiles[i].name, type: selectedFiles[i].type}
                this.tasks[index].files.push(file);
                this.attachments.push(selectedFiles[i]);
            }
            // document.getElementById('taskFiles').value=[];
            // console.log(this.tasks[index].files);
        },
        toggleJustNewBoard() {
            this.justNewBoard = !this.justNewBoard;
        },
        toggleJustNewMember() {
            this.viewMemmod = !this.viewMemmod;
        },
        getJOBoardUsers() {
            if(this.justNewBoard == true) {
                this.brand.board_id = '';
                axios.post('/api/getJOBoardUsers', {board_id: null})
                    .then(response => {
                        // console.log(response);
                        this.boardNotMembers = response.data;
                        this.boardMembers = [];
                        this.boardMembers.push(this.cUser);
                        var index = _.findIndex(this.boardNotMembers, {id: this.cUser.id});
                        this.boardNotMembers.splice(index, 1);
                    })

            }
            else {
                this.brand.newBoard.name = ''
                axios.post('/api/getJOBoardUsers', {board_id: this.brand.board_id})
                    .then(response => {
                        // console.log(response);
                        this.boardMembers = response.data.member;
                        this.boardNotMembers = response.data.not
                    })
            }
        },
        addMemberToNewBoard(e) {
            // console.log(e);
            e.forEach(element => {
                this.boardMembers.push(element);
                let index = _.findIndex(this.boardNotMembers, {id: element.id});
                this.boardNotMembers.splice(index, 1);
            });
        },
        refreshBoardMembers(e) {
            this.boardMembers =  e.member;
            this.boardNotMembers = e.not
        },
        changeDateFormat(date, type, i) {
            // console.log(date);
            // this.taskData.due = new Date(this.taskData.due).toISOString().slice(0, 10).replace('T', ' ');
            date = moment(date).format('YYYY-MM-DD')
            if(type == 'in') {
                this.brand.date_in = date;
            }
            if(type == 'due') {
                this.brand.date_due = date;
            }
            if(type == 'task') {
                this.tasks[i].due = date;
            }
            // console.log(date);
            
        }
    }
}
</script>
<style scoped lang="scss">
    @media print{
        .nav-side-menu, noprint{
            display: none;
        }
    }
    table{
        border: 1px solid gray !important;
    }
    label{
        color: #868686 !important;
        font-weight: 700 !important;
        font-size: 0.9em !important;
    }
    .btn-group, .btn-group-vertical {
        position: relative;
        margin: 2px 1px;
    }
    label > small{
        font-weight: normal;
    }
    .jo-barcode{
        margin-top: 10px;
        margin-right: 10px;
        width: 100px;
        height: 100px;
        border: 1px solid gray;
    }
    .btn-group bootstrap-select{
        margin-top: 0px !important;
        margin-bottom: 7px !important;
    }
    div.checkbox > label{
        font-weight: normal !important;
    }
    .modal-small .modal-body{
        margin-top: 0;
    }
</style>
