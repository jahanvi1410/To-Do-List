
document.querySelector('#push').onclick = function myFunction(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                     ${document.querySelector('#newtask input').value}
                </span>
                <div class="delete">
                    <i style="font-size:24px" class="fa">&#xf00d;</i>
					</div>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function myFunction(){
                this.parentNode.remove();
            }
        }
    }
}