$(document).ready(function() {
    var showcaseItemDivArray = [];
    var stored_value = localStorage.getItem("local");
    if (stored_value){
        Array.from(stored_value.split(",")).forEach(e => {
            $(".showcase-items-list").append(e);
            showcaseItemDivArray.push(e);
        }); 
    }


    var callback = function() {
        var textValue = $('#text-input').val();
        $('#text-input').val("")
        var showcaseItemDiv = `<div class="showcase-item-div">
        <div class="showcase-item">`+textValue+`
        </div>
        <label class="check-box-label">
            <input type="checkbox" id="check-box"/>
        </label>
    </div>`;
        showcaseItemDivArray.push(showcaseItemDiv);
        $(".showcase-items-list").append(showcaseItemDiv);
        localStorage.setItem("local", showcaseItemDivArray);
    };

    $("#text-input").keypress(function() {
        if ($('#text-input').val() != "")
            if (event.which == 13) callback();
    });

    $('#submit-task').click(function(){
        if ($('#text-input').val() != "")
            callback();
    });
    $('.showcase-items-list').on('change','#check-box',function(e){
        $(e.target).parent().parent().fadeToggle()
        var index = 0;
        var final_index = 0;
        showcaseItemDivArray.forEach(item=>{
            index ++;
            if ($(item).html() == $(e.target).parent().parent().html()){
                final_index = index-1;
            }
        })
        showcaseItemDivArray.splice(final_index,1);
        localStorage.setItem("local", showcaseItemDivArray);
    })

});