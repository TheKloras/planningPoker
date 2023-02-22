const VotingConfiguration=()=> {
    return(
        <div>
<div class="voting-config modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
            <label class="form-check-label" for="flexCheckDefault">
                Use all cards
            </label>
        </div>
        </h1>
        
      </div>
      <div class="modal-body">
        <div class="row justify-content-evenly ">
            <div class="form-check col-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    0
                </label>
            </div>
            <div class="form-check col-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    1/2
                </label>
            </div>
            <div class="form-check col-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    1
                </label>
            </div>
            <div class="form-check col-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    2
                </label>
            </div>

        </div>
        <div class="row justify-content-evenly ">
            <div class="form-check col-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    3
                </label>
            </div>
            <div class="form-check col-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    5
                </label>
            </div>
            <div class="form-check col-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    8
                </label>
            </div>
            <div class="form-check col-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    13
                </label>
            </div>

        </div>
        <div class="row justify-content-evenly ">
            <div class="form-check col-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    20
                </label>
            </div>
            <div class="form-check col-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    40
                </label>
            </div>
            <div class="form-check col-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    100
                </label>
            </div>
            <div class="form-check col-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    ?
                </label>
            </div>

        </div>
        <div class="row justify-content-start ">
            <div class="form-check col-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label class="form-check-label" for="flexCheckDefault">
                    Coffee
                </label>
            </div>
            

        </div>
      </div>
      <div class="modal-footer d-flex  justify-content-evenly">
        <button type="button" class="btn btn-primary col-4">Save</button>
        <button type="button" class="btn btn-outline-primary col-4" data-bs-dismiss="modal">Cancel</button>
      </div>
    </div>
  </div>
</div>



                    </div>
    )

}

export default VotingConfiguration;