import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css';

const Support = () => {


    return <div className="content-body">
        <div class="container-fluid">
            <div class="row page-titles">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="javascript:void(0)">Support</a></li>
                </ol>
            </div>

            <div class="card">
              
                <div class="card-body">
                    <div class="basic-form">
                            <div class="mb-3">
                                <label class="text-label form-label" for="dz-password">Subject</label>
                                <span class="text-danger">*</span>
                                <div class="input-group transparent-append">
                                    <input type="text" class="form-control" id="dz-password" required />
                                  
                                </div>
                            </div>

                            <div class="mb-3">
                                <label class="text-label form-label" for="dz-password">Message</label>
                                <span class="text-danger">*</span>
                                <ReactQuill theme="snow" />
                            </div>
                        </div>
                        <button type="button" class="btn btn-info">Submit</button>
                </div>
            </div>
        </div>
    </div>
}

export default Support