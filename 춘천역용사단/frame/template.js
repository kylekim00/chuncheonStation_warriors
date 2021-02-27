let template ={
    indexHTML:function(css){
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/css/frame.css">
            <title>춘천역 용사단</title>
        </head>
        <body>
            <div class="body" id="body_head">
                <img src="/icon/worriors of chuncheon.png" alt="">
            </div>
            <div class="body" id="body_form">
                <form action="/" method="post" id="form_form">
                <br>
                    <div id="form_member_gender">
                        <button class="form_member_gender_block" id="gender1" onclick="gender_click1(event)"><img src="/icon/gender_both.png" alt=""></button>
                        <button class="form_member_gender_block" id="gender2" onclick="gender_click2(event)"><img src="/icon/girl_02.png" alt=""></button>
                        <input type="hidden" name="form_gender" id="form_gender" value=''>
                    </div>
                    <br>
                    <div id="form_member_count">
                        <button class="form_member_count_block" id="count1" onclick="count_click1(event)"><img src="/icon/2용사.png" alt=""></button>
                        <button class="form_member_count_block" id="count2" onclick="count_click2(event)"><img src="/icon/3용사.png" alt=""></button>
                        <button class="form_member_count_block" id="count3" onclick="count_click3(event)"><img src="/icon/4용사.png" alt=""></button>
                        <input type="hidden" name="form_count" id="form_count" value=''>
                    </div>
                    <br>
                    <br>
                    <br>
                    <div id='form_go'>
                        <input type="button" value="결성이닷!" id="form_go_block" name="go">
                    </div>
                </form>
                    <br>
                    <br>
                    
            </div>
            <br>
        </body>
        <script src='/javascript/frame.js'>
           
        </script>
    </html>`
    },

    waitingHTML:function(){
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/css/frame.css">
            <title>춘천역 용사단</title>
        </head>
        <body>
            <div class="body" id="body_head">
                <img src="/icon/worriors of chuncheon.png" alt="">
            </div>
            <div class="body" id="body_form">
                    <br>
                    <br>
                    <div class='anime'>
                        <img src="/icon/기달리는중....png" alt="" class='anime1'>
                        <img src="/icon/waiting_3,5.png" alt="" class='anime1'>
                    </div>
                    
            </div>
            <br>
            <a href='/'>돌아가기(임시)</a>
        </body>
        <script src='/javascript/frame.js'>
           
        </script>
    </html>`
    },

    loginHTML:function(){
        return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel='stylesheet' href="/css/login.css">
                <link rel="stylesheet" href="/css/login-form.css">
                <title>정보입력-춘천역 용사단</title>
            </head>
                <body>
                    <div class="body" id="body_head">
                        <img src="/icon/worriors of chuncheon.png" alt="">
                    </div>
                    <div class="body" id="body_form">
                        <div class="form-style-2">
                            <div class="form-style-2-heading">로그인</div>
                            <form action="/login" method="post">
                                <label for="field1"><span>닉네임<span class="required">*</span></span><input type="text" class="input-field" name="form_name" value="" /></label>
                                <label for="field4"><span>성별</span><select name="form_gender" class="select-field">
                                    <option value="false">남성</option>
                                    <option value="true">여성</option>
                                </select></label>
                                <label><span></span><input type="submit" value="Submit" /></label>
                            </form>
                            </div>
                            <img src="/icon/waiting_wb.png" alt="" id="anime">
                    </div>
                    <br>
                    <style>

                    </style>
                </body>
        </html>`
    }
}
module.exports = template;