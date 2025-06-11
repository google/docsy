---
title: EU Illegal Content Report Form
description: "Use this form to report content that you believe is illegal in the European Union. This form is intended for individuals claiming legal rights in the EU, as well as individuals or entities designated as trusted flaggers pursuant to the EU Digital Services Act (DSA)"
---

<div class="row my-5 5align-items-start">
    <div class="col d-flex align-items-center rounded-3 p-4 shadow" style="background-color: #6e49cb; color: #ffffff;">
        <div id="dsaFormDiv">
            <p class="h4">DSA Reporting Form</p>
            <form action="https://us-central1-glsec-trust-safety-live.cloudfunctions.net/dsa-webhook" method="post" id="dsaForm" target="hidden-form">
                <div class="mb-3">
                    <label for="email" class="form-label">Your email address</label>
                    <input name="email" type="email" required class="form-control">
                </div>
                <div class="mb-3">
                    <label for="violation" class="form-label">Type of legal violation you are reporting?</label>
                    <select name="violation" required class="form-control" id="lang">
                        <option value="violence">Violence</option>
                        <option value="terrorist">Terrorist content</option>
                        <option value="hateful">Hateful content</option>
                        <option value="csam">Child sexual exploitation</option>
                        <option value="harassment">Harassment</option>
                        <option value="private">Private or personal information</option>
                        <option value="copyright">Copyright or trademark infringement</option>
                        <option value="other">Other legal issue</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="location" class="form-label">Location or URL of
                    illegal content</label>
                    <textarea name="location" type="text" required class="form-control"></textarea>
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Please provide a detailed description of why you believe this content is illegal</label>
                    <textarea name="description" type="text" required class="form-control"></textarea>
                </div>
                <div class="mb-3">
                    <label for="country" class="form-label">EU member state you are
                    located in?</label>
                    <select name="country" required class="form-control" id="lang">
                        <option value="austria">Austria</option>
                        <option value="belgium">Belgium</option>
                        <option value="bulgaria">Bulgaria</option>
                        <option value="croatia">Croatia</option>
                        <option value="cyprus">Cyprus</option>
                        <option value="czech">Czech Republic</option>
                        <option value="denmark">Denmark</option>
                        <option value="estonia">Estonia</option>
                        <option value="finland">Finland</option>
                        <option value="france">France</option>
                        <option value="Germany">Germany</option>
                        <option value="greece">Greece</option>
                        <option value="hungary">Hungary</option>
                        <option value="ireland">Ireland</option>
                        <option value="italy">Italy</option>
                        <option value="latvia">Latvia</option>
                        <option value="lithuania">Lithuania</option>
                        <option value="luxembourg">Luxembourg</option>
                        <option value="malta">Malta</option>
                        <option value="netherlands">Netherlands</option>
                        <option value="poland">Poland</option>
                        <option value="portugal">Portugal</option>
                        <option value="romania">Romania</option>
                        <option value="slovakia">Slovakia</option>
                        <option value="slovenia">Slovenia</option>
                        <option value="spain">Spain</option>
                        <option value="sweden">Sweden</option>
                    </select>
                </div>
                <div class="mb-3">
                    <strong class="form-label">If you have any attachments or
                    supporting documentation, please send them to
                    abuse@gitlab.com</strong>
                </div>
                <div class="mb-3">
                    <button type="submit" class="btn btn-lg btn-light">Submit</button>
                </div>
            </form>
        </div>
        <div id="thankyou" class="text-center align-items-center">
            <p class="h2 mb-4">Thank you for your submission!</p>
        </div>
    </div>
</div>

<iframe style="display:none" name="hidden-form"></iframe>
<div class="modal fade" id="videoModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" style="color: #000000;">GitLab DSA</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
    </div>
  </div>
</div>

<script>
    $("#dsaForm").on("submit", function(event) {
        console.log("Triggering submit");
        $("#thankyou").show();
        $("#dsaFormDiv").hide();
    });
</script>

<style>
    #thankyou {
        width: 100% !important;
        display: none;
    }
    #regiserFormDiv {
        display: block;
    }
    .modal.fade .modal-dialog {
      -webkit-transition: -webkit-transform 0.3s ease-out;
         -moz-transition: -moz-transform 0.3s ease-out;
           -o-transition: -o-transform 0.3s ease-out;
              transition: transform 0.3s ease-out;
    }
</style>
