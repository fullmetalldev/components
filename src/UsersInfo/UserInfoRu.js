import React from 'react';
import "./userInfo.css"

const UserInfoRu = () => {
    return (
        <div className="documentWrapper">
            <div className="documentWrapper__row">
                <span className="documentWrapper__mainTitle">ИНФОРМАЦИЯ ДЛЯ КЛИЕНТА</span>
                <span className="documentWrapper__afterMainTitle">Для обеспечения безопасности в процессе проведения операций в рамках
                предоставляемых Обществом услуг и защиты персональных данных, Клиент обязан:</span>
                <div className="documentWrapper__spansRow">
                    <span className="documentWrapper__spansRow_minus">-</span>
                    <span className="documentWrapper__spansRow_title"> не раскрывать посторонним лицам
                свой персональный идентификационный номер (ПИН), пароль, пароль от электронной
                почты, иные сведения, которые могут способствовать несанкционированному доступу
                при удаленном/дистанционном обслуживании от имени пользователя; </span>
                </div>
                <div className="documentWrapper__spansRow">
                    <span className="documentWrapper__spansRow_minus">-</span>
                    <span className="documentWrapper__spansRow_title"> периодически менять свои
Авторизационные данные, используемые для входа мобильное приложение;</span>
                </div>
                <div className="documentWrapper__spansRow">
                    <span className="documentWrapper__spansRow_minus">-</span>
                    <span className="documentWrapper__spansRow_title"> не позволять другим
использовать свой мобильный телефон, через который осуществляются операции;</span>
                </div>
                <div className="documentWrapper__spansRow">
                    <span className="documentWrapper__spansRow_minus">-</span>
                    <span className="documentWrapper__spansRow_title">при потере или краже мобильного
телефона, незамедлительно сообщить об этом ОсОО “МКК
Келечек”</span>
                </div>
                <div className="documentWrapper__spansRow">
                    <span className="documentWrapper__spansRow_minus">-</span>
                    <span className="documentWrapper__spansRow_title">не отправлять свою личную
информацию, пароль или персональный идентификационный номер через электронную почту, социальные сети и другие средства электронного обмена данными</span>
                </div>
                <div className="documentWrapper__spansRow">
                    <span className="documentWrapper__spansRow_minus">-</span>
                    <span className="documentWrapper__spansRow_title">не отправлять свою личную
информацию, пароль или персональный идентификационный номер через электронную почту, социальные сети и другие средства электронного обмена данными</span>
                </div>
                <div className="documentWrapper__spansRow">
                    <span className="documentWrapper__spansRow_minus">-</span>
                    <span className="documentWrapper__spansRow_title">незамедлительно сообщить ОсОО “МКК Келечек” при
возникновении любых вопросов относительно безопасности доступа к мобильному
приложению.</span>
                </div>
            </div>
        </div>
    );
};

export default UserInfoRu;