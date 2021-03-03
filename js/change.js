function makeHome() {
    var content = '<h2>目錄</h2>' +
                '<div class="media border p-3">' +
                '<img src="./image/me.jpg" alt="Vincent Peng" class="mr-3 mt-3 rounded-circle" style="width:60px;">' +
                '<div class="media-body">' +
                '<h4>彭盛暉<small><i>Posted on may 1, 2019</i></small></h4>' +
                '<p>這是shpeng的網頁.</p>' +
                '<p>內容包含個人資料，自我介紹，fb等.</p>' +
                '<p>網頁使用bootstrap製作.</p>' +
                '<p><strong>Tip:</strong>根據標籤前往別的頁面</p>' +
                '</div></div>' +
                '<div class="media border p-3">' +
                '<img src="./image/me.jpg" alt="Vincent Peng" class="mr-3 mt-3 rounded-circle" style="width:60px;">' +
                '<div class="media-body">' +
                '<h4>彭盛暉<small><i>Posted on a minute ago</i></small></h4>' +
                '<p>你幹嘛回來看.</p>' +
                '</div></div>';

    document.getElementById("content").innerHTML=content;
}

function makeInformation() {
    var content = '<div id="accordion">' +
                    '<div class="card" style="width: 48rem;">' +
                        '<div class="card-header">' +
                            '<a class="card-link" data-toggle="collapse" href="#collapseOne">' +
                                'Personal Information' +
                            '</a>' +
                        '</div>' +
                        '<div id="collapseOne" class="collapse show" data-parent="#accordion">' +
                            '<div class="card-body">' +
                                '<p class="name">名字 : 彭盛暉</p>' +
                                '<p class="birth">生日 : 1998/6/7</p>' +
                                '<p class="blood">血型 : B型</p>' +
                                '<p class="star">星座 : 雙子座</p>' +
                                '<p class="hobby">興趣 : 睡覺、聽音樂、打東東</p>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="card" style="width: 48rem;">' +
                        '<div class="card-header">' +
                            '<a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">' +
                                'Education' +
                            '</a>' +
                        '</div>' +
                        '<div id="collapseTwo" class="collapse" data-parent="#accordion">' +
                            '<div class="card-body">' +
                                '<p class="ele">台北市建安國小(2008~2013)</p>' +
                                '<p class="jun">台北市大安國中(2013~2015)</p>' +
                                '<p class="hig">國立政大附中(2015~2017)</p>' +
                                '<p class="uni">國立高雄師範大學(2017~now)</p>' +
                  '</div></div></div></div>';

    document.getElementById("content").innerHTML=content;
}

function answer() {
    document.getElementById("ans").style.visibility= "visible";
}

function clean() {
    document.getElementById("ans").style.visibility= "hidden";
}