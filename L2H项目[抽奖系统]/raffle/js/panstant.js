/**********************************������*****************************************/
//Ĭ����Ϣ
var personInfo = [
    {
        id:1,
        name:'L2H',
        age:18,
        sex:'��'
    },{
        id:2,
        name:'CEO',
        age:18,
        sex:'��'
    },{
        id:3,
        name:'����',
        age:38,
        sex:'��'
    },{
        id:4,
        name:'С��',
        age:48,
        sex:'Ů'
    },{
        id:5,
        name:'����',
        age:36,
        sex:'��'
    },{
        id:6,
        name:'����',
        age:27,
        sex:'��'
    },{
        id:7,
        name:'����',
        age:36,
        sex:'��'
    },{
        id:8,
        name:'С��',
        age:37,
        sex:'Ů'
    },{
        id:9,
        name:'С��',
        age:23,
        sex:'Ů'
    },{
        id:10,
        name:'����',
        age:32,
        sex:'��'
    },{
        id:11,
        name:'С��',
        age:34,
        sex:'Ů'
    },{
        id:12,
        name:'С��',
        age:34,
        sex:'��'
    },{
        id:13,
        name:'����',
        age:54,
        sex:'��'
    },{
        id:14,
        name:'ţү',
        age:25,
        sex:'��'
    },{
        id:15,
        name:'СҶ',
        age:18,
        sex:'Ů'
    },{
        id:16,
        name:'����',
        age:45,
        sex:'��'
    },{
        id:17,
        name:'�Ŵ�',
        age:22,
        sex:'��'
    },{
        id:18,
        name:'���',
        age:24,
        sex:'Ů'
    },{
        id:19,
        name:'��ү',
        age:45,
        sex:'��'
    },{
        id:20,
        name:'ǿ��',
        age:28,
        sex:'��'
    },{
        id:21,
        name:'��ү',
        age:34,
        sex:'��'
    },{
        id:22,
        name:'С��',
        age:19,
        sex:'Ů'
    }
]
//��ȡtable��id
var $tab = $('#tab>tbody')
//����������������ÿ��tr
var tr = []
//��ȡ���еĵ�����ť
var $btn = $('.navBtn')
//����û����������
var $text = $('#myForm :text')
//�������ݰ�ť
var insertButton = $('#myForm :button')
//Ĭ��ѡ�еİ�ť
//var $btnSelect = $('.btnSelect')
//������Ϣ�ĳ���
var infoLength = personInfo.length;
//��ȡ�齱��ť
var $raff = $('.raff')
//��ȡ����齱��ťҪ��ʾ��ͼƬ
var $raffroundImg = $('.raffroundImg')


/**********************************����������*****************************************/
    //��������personInfo����
addPersonInfo()

//���õ��е���ʽ
eachOdd()

//Ĭ�ϵ�һҳ����10�����ݾ�����
gtTenHide()

//�����ť��תҳ��
clackBtnPage()

//Ϊdelete��ť��ӵ���ɾ�������¼�
//onclickDeleteInfo()

//һ���������õ�����ť(����ul�Ŀ��)���о�����ʾ
navBtnCenter()

//�õ��û��������Ϣ���ύ
getUserInfoSubmit()

//�齱ͼ
raffleFunction()


/**********************************������*****************************************/

//һ���������õ�һҳ����10�о�����
function gtTenHide(){
    //һ����������ÿһҳtr����10�����ݾ�����
    var trInfoAll = $('.tr-info')
    if(trInfoAll.size()>=10){
        $('.tr-info:gt(9)').hide()
    }
}

//Ϊÿһ���������õ��б���
function eachOdd () {
    $(tr).each(function(){
        //����������Ϊԭ������ʽ
        $('tr').css('background','white')
        //���������õ��е���ʽ
        $('tr:odd').css({
            background:'rgb(110,110,100)'
        })
        //��delete����Ϊԭ������ʽ
        $('tr .delete').css({
            margin:'0px auto',
            color:'black',
            fontSize:'20px',
            display:'block',
            width:'60%'
        })
        //��delete���õ��е���ʽ
        $('tr:odd .delete').css({
            margin:'0px auto',
            color:'white',
            fontSize:'20px',
            display:'block',
            width:'60%'
        })
    })
}

//�����ť�л�ҳ�沢����ÿ�����ݵ�����
function clackBtnPage(){
    //�����ť���з�ҳ
    $($btn).click(function(){
        //һ�����͸����е�tr��������
        $('.tr-info').hide()
        //�Ƴ�btnSelect Ҳ���Ǳ�ѡ�еİ�ť
        $($btn).each(function(){
            $($btn).removeClass('btnSelect')
        })
        $(this).addClass('btnSelect')
        var value = $(this).html()
        var num = 0
        //ÿһҳֻ��ʾ10�����ݣ���������
        //gtTenHide() : �����ǰҳ��Ϊ��һҳ��ֻ��ʾ��һҳ������ ��������
        value == ++num ? $('.tr-info:lt(10)').show() && gtTenHide()
            :value == ++num ? $('.tr-info:gt(9):lt(10)').show()
            :value == ++num ? $('.tr-info:gt(19):lt(10)').show()
            :value == ++num ? $('.tr-info:gt(29):lt(10)').show()
            :value == ++num ? $('.tr-info:gt(39):lt(10)').show()
            :value == ++num ? $('.tr-info:gt(49):lt(10)').show()
            :alert('��������');//ע:д����Ҫ��:������50�����ݣ�
    })
}

//�õ��û��������Ϣ���ύ
function getUserInfoSubmit(){
    //�����ť�ύ����
    insertButton.click(function(){
        //�ж��������Ϣ��Ϊ�ղ��ܽ������
        if($text[0].value!='' && $text[1].value!='' && $text[2].value!='' && $text[3].value!=''){

            var data =0 ;
            //�ж���ӵ����ݲ��ܴ���50��
            if(infoLength<50){
                data=0

                //����personInfo��������Ϣ
                $(personInfo).each(function(index){
                    //�ж��û������ֵ�Ƿ�����ظ�
                    if(parseInt($text[0].value)!= personInfo[index].id){
                        data++
                    }
                    })

                    //������ظ���data�ĳ��ȵ������ݵĳ���
                    if(data == personInfo.length){

                        //�ж�����ı���Ƿ�����ֵ����
                        if(/^[1-9]+$/.test($text[0].value)){
                            //�ж������Ƿ�����ֵ����
                            if((/^[0-9]+$/.test($text[2].value))){
                                //�ж������Ƿ����л�Ů
                                if($text[3].value == '��' || $text[3].value == 'Ů'){


                                    var $trInfo = $('.tr-info')
                                    if(parseInt($text[0].value) == parseInt($trInfo.length)+1){
                                        //����û��������Ϣ������personInfo
                                        personInfo.push({ id : $text[0].value,
                                            name : $text[1].value,
                                            age : $text[2].value,
                                            sex : $text[3].value
                                        })
                                        //����û���Ϣ
                                        addInfo()
                                    }else{
                                        alert('���ֻ�������һ����Ա��Ϣ����һ��')
                                    }

                                }else{
                                    alert('�Ա���о���Ů������ȷ����')
                                }


                            }else{
                                alert('���������Щ����Ŷ!!!')
                            }

                        }else{
                            alert('���ֻ����������(��0)')
                        }

                    }else{
                        alert('����ظ�������֣������º˶Ժ�����Ӵ���Ϣ(��Ų���Ϊ0)!!!')
                    }

            }else{
                alert('��Ա��������ɾ��������Ա���ٽ������(insert)')
            }
            //�û����������Ϊ���������ʾ
        }else{
            alert('�������Ϣ����Ϊ��!!!')
        }


    })
}

//Ϊdelete��ť��ӵ���ɾ�������¼�
function onclickDeleteInfo(){
    //��ȡtr�����classΪdelete���ı�Ϊÿһ��delete���ϼ����¼�(ɾ���¼�)
    $('tr>td>.delete').click(deleteInfo)
}

//��������personInfo����
function addPersonInfo(){
    //��table���tr���������ݣ�
    $(personInfo).each(function(index){
        tr[index] = $tab.append('<tr class="tr-info">'+
        '<td>'+personInfo[index].id+'</td>'+
        '<td>'+personInfo[index].name+'</td>'+
        '<td>'+personInfo[index].age+'</td>'+
        '<td>'+personInfo[index].sex+'</td>'+
        '<td><a class="delete" href="javascript:;">delete</a></td>'+
        '</tr>')
    })

    //Ϊdelete��ť��ӵ���ɾ�������¼�
    onclickDeleteInfo()
}

//ɾ������
function deleteInfo() {
    //��ȡ����Ԫ��
    var $subParent = $(this).parent().parent()
    console.log()
    var flag = confirm('��ȷ��ɾ��' + $subParent.children(':gt(0):lt(1)').html() + '����Ϣ��')


    //��ȡɾ����Ԫ�ص��±�ֵ
    var $delIndex = ($($subParent).index())-1
    //ͨ��Ԫ�ص��±�ֵ����ɾ��personInfo�е�Ԫ��
    flag ? personInfo.splice($delIndex,1) : false

    //ȷ���Ժ�ɾ���������� && ɾ��Ԫ�غ��������õ��е���ʽ
    flag ? $subParent.remove() && eachOdd(): false
    //flagΪ�� infoLengthÿ��ɾ����Ա��Ϣ�ͼ���
    flag ? infoLength-- :false

    //ɾ����ť
    deleteButton()
    //������ť
    $($btn).each(function(){
        //�����ǰ�İ�ť��ѡ�е�״̬�����´�ҳֻ����10������
        if($(this).hasClass('btnSelect')){
            var value = $(this).html()
            var num = 0
            //ÿһҳֻ��ʾ10�����ݣ���������
            //gtTenHide() : �����ǰҳ��Ϊ��һҳ��ֻ��ʾ��һҳ������ ��������
            value == ++num ? $('.tr-info:lt(10)').show() && gtTenHide()
                :value == ++num ? $('.tr-info:gt(9):lt(10)').show()
                :value == ++num ? $('.tr-info:gt(19):lt(10)').show()
                :false
            //����ul�Ŀ�Ƚ��о�����ʾ
            navBtnCenter()
        }
    })
    //�����ťҳ��
    clackBtnPage()
}

//�������
function addInfo(){
    //����û���������ݵ���� �� Ϊ�µ���Ϣ��ӵ������¼���ɾ�����ݣ�
    $tab.append('<tr class="tr-info">'+
    '<td>'+personInfo[personInfo.length-1].id+'</td>'+
    '<td>'+personInfo[personInfo.length-1].name+'</td>'+
    '<td>'+personInfo[personInfo.length-1].age+'</td>'+
    '<td>'+personInfo[personInfo.length-1].sex+'</td>'+
    '<td><a class="delete" href="javascript:;">delete</a></td>'+
    '</tr>').find('.delete').last('td .delete').click(deleteInfo)

    //������Ա��Ϣ
    sortInfo()

    //Ϊ����ӵ�Ԫ�ر������õ��е���ʽ
    eachOdd()
    //ÿ�������Ԫ�����ӳ�Ա��Ϣ����
    infoLength++
    //�����Ϣ�ɹ����������������
    $text[0].value = ''
    $text[1].value = ''
    $text[2].value = ''
    $text[3].value = ''

    $($btn).each(function(){
    if($(this).hasClass('btnSelect')){
        //һ�����͸����е�tr��������
        $('.tr-info').hide()
        //�õ���ǰ��ť������
        var value = $(this).html()
        var num = 0
        //ÿһҳֻ��ʾ10�����ݣ���������
        //gtTenHide() : �����ǰҳ��Ϊ��һҳ��ֻ��ʾ��һҳ������ ��������
        value == ++num ? $('.tr-info:lt(10)').show() && gtTenHide()
            :value == ++num ? $('.tr-info:gt(9):lt(10)').show()
            :value == ++num ? $('.tr-info:gt(19):lt(10)').show()
            :value == ++num ? $('.tr-info:gt(29):lt(10)').show()
            :value == ++num ? $('.tr-info:gt(39):lt(10)').show()
            :value == ++num ? $('.tr-info:gt(49):lt(10)').show()
            :alert('��������');//ע:д����Ҫ��:������50�����ݣ�
    }


})

    //��Ӱ�ť
    addButton()

    //����ul�Ŀ�Ƚ��о�����ʾ
    navBtnCenter()
}

//ɾ����ť
function deleteButton(){
    //С��10������  ɾ���ڶ�ҳ��ť
    if(infoLength<=10){
        var b = $btn.get(1)
        $(b).parent().remove()
    }
    //С��20������  ɾ������ҳ��ť
    if(infoLength<=20){
        var b = $btn.get(2)
        $(b).parent().remove()
    }
    //С��30������  ɾ������ҳ��ť
    if(infoLength<=30){
        var b = $btn.get(3)
        $(b).parent().remove()
    }
    //С��40������  ɾ������ҳ��ť
    if(infoLength<=40){
        var b = $btn.get(4)
        $(b).parent().remove()
    }
    //С��50������  ɾ������ҳ��ť
    if(infoLength<=50){
        var b = $btn.get(5)
        $(b).parent().remove()
    }
    //С��60������  ɾ������ҳ��ť
    if(infoLength<=60){
        var b = $btn.get(6)
        $(b).parent().remove()
    }
    //С��70������  ɾ������ҳ��ť
    if(infoLength<=70){
        var b = $btn.get(7)
        $(b).parent().remove()
    }
    //����ul�Ŀ�Ƚ��о�����ʾ
    navBtnCenter()
}//ע:д����Ҫ��:������50������,��ťҲ�Ǹ���ͬ����

//��Ӱ�ť
function addButton(){
    //���»�ȡ��ť����
    $btn = $('.navBtn')
    //����11��Ӱ�ť
    if(infoLength == 11){
        $('<a href="javascript:;"><li class="navBtn">'+(parseInt($($btn).last().html())+1)+'</li></a>').appendTo($('.btn-list ul'))
    }
    //����21��Ӱ�ť
    if(infoLength == 21){
        $('<a href="javascript:;"><li class="navBtn">'+(parseInt($($btn).last().html())+1)+'</li></a>').appendTo($('.btn-list ul'))
    }
    //����31��Ӱ�ť
    if(infoLength == 31){
        $('<a href="javascript:;"><li class="navBtn">'+(parseInt($($btn).last().html())+1)+'</li></a>').appendTo($('.btn-list ul'))
    }
    //����41��Ӱ�ť
    if(infoLength == 41){
        $('<a href="javascript:;"><li class="navBtn">'+(parseInt($($btn).last().html())+1)+'</li></a>').appendTo($('.btn-list ul'))
    }
    //����51��Ӱ�ť
    if(infoLength == 51){
        $('<a href="javascript:;"><li class="navBtn">'+(parseInt($($btn).last().html())+1)+'</li></a>').appendTo($('.btn-list ul'))
    }
    //����61��Ӱ�ť
    if(infoLength == 61){
        $('<a href="javascript:;"><li class="navBtn">'+(parseInt($($btn).last().html())+1)+'</li></a>').appendTo($('.btn-list ul'))
    }//ע:д��(�������50������)
    //��Ӱ�ť�Ժ������»�ȡ��ť�����͵���¼�
    $btn = $('.navBtn')
    //�����ť�л�ҳ��
    clackBtnPage()
    //����ul�Ŀ�Ƚ��о�����ʾ
    navBtnCenter()
}

//������ť�ĸ������ж�̬������ʾ
function navBtnCenter(){
    //���»�ȡbtn����(ˢ��)
    $btn = $('.navBtn')
    //�õ�������ť�Ĵ�С ������߾�
    var btnSize = $($btn).outerWidth(true)
    //�õ�������ť�ĸ���
    var varNumber = $($btn).length
    //�õ�ulԪ��
    var $ul = $($btn).parent().parent()

    //��С * ���� = ���ul�Ŀ��
    $($ul).css('width',btnSize*varNumber)
}

//������Ա��Ϣ
function sortInfo(){
    $($tab).children('.tr-info').remove()
    personInfo = personInfo.sort(function(a,b){
        return a.id - b.id

    })

    //personInfo = sortArr
    addPersonInfo()
}

//ʵ�ֳ齱����
function raffleFunction(){
    //����齱��ť
    $($raff).click(function(){
        //��ȡ����tr
        var $trInfo = $('.tr-info')
        var $trInfoChild = []
        $($trInfo).each(function(index){
            $trInfoChild[index] = $trInfo[index].firstChild.innerHTML
        })
        //��������tr
        $($trInfo).each(function(index){
            //�õ�ĳ��tr
            var value = $trInfo[index]
            //��tr����Ĭ����ɫblack
            $(value).css('color','black')
        })
        //�������ó齱ͼΪ����
        $($raff).css('display','none')
        //��ʾ�齱ͼ
       $($raffroundImg).fadeIn(1000)
        //��תЧ����css
        $($raffroundImg).addClass('imgTran')
        //���ö�ʱ��
        var stop = setTimeout(function(){
            //�жϳ齱ͼ�Ƿ�����תЧ��
            if($($raffroundImg).hasClass('imgTran')){
                //��������н����
                var rafflePerson = parseInt(Math.random()*personInfo[personInfo.length-1].id + personInfo[0].id)
                var whil = 0
                var index = 0 //personInfo���±�
                while(whil == 0){
                    //���index�ĳ��Ȳ�С��personInfo.length�ĳ���
                    if(index < personInfo.length){
                        //���ÿ�����ݵ�ֵ�����н���ֵ
                        if($trInfoChild[index++] == rafflePerson){
                            //��ʾ�н���
                            var qd = confirm('��ϲ���Ϊ'+rafflePerson+'�ĳ�Ա�н��ˣ�����')
                            //����ÿ������
                            $($trInfo).each(function(index){
                                //ÿ�����ݵ�ֵ�Ƿ�����н���ֵ
                                if(parseInt($trInfo[index].firstChild.innerHTML) == parseInt(rafflePerson)){
                                    var mumber = $trInfo[index]
                                    //�����н��˺�ɫ������ʾ
                                    $(mumber).css('color','red')
                                    if(qd){
                                        $($raff).css('display','block')
                                        $($raffroundImg).removeClass('imgTran')
                                        $($raffroundImg).css('display','none')
                                        clearTimeout(stop)
                                    }else{
                                        $($raff).css('display','block')
                                        $($raffroundImg).removeClass('imgTran')
                                        $($raffroundImg).css('display','none')
                                        clearTimeout(stop)
                                    }
                                    //������ѭ��
                                    whil = 1;
                                }
                            })
                        }else{
                            rafflePerson = parseInt(Math.random()*personInfo[personInfo.length-1].id + personInfo[0].id)
                             whil = 0
                        }
                    }else{
                        index=0
                    }
                }
            }
        },5200)
    })
}