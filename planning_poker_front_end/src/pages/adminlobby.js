import VotingConfiguration from "../components/votingconfiguration";

const AdminLobby=()=>{
    return(
        <section class="lobby container-fluid row justify-content-center align-items-center">
            <div class="voting col-7">
                <div class="lobby-element voting-area ">
                    <h1 class="text-center">Voting Area under construction...
                    </h1>                  

                </div>
                <div class="lobby-element voting-controls">
                    <div class="row "  >
<button type="button" class=" col-3 btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Voting configuration</button>
                    <VotingConfiguration/>
                    </div>
                    <div class="row">
 <button class=" col-3 btn btn-outline-primary">Clear Votes</button>
                    <button class=" col-3 btn btn-outline-primary">Flip Cards</button>
                    <button class=" col-3 btn btn-primary">Finish Voting</button>
                    </div>

                    
                   
                </div>
                
            </div>
            <div class="lobby-element player-list col-4">
                <h1 class="text-center">(Admin Lobby) 
                Player List under construction...</h1>
            </div>
        </section>
    )
}

export default AdminLobby;