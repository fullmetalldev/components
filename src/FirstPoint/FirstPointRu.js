import React from 'react';
import "./firstPoint.css"

const FirstPointRu = () => {
    return (
        <div className="documentWrapper">
            <div className="firstPoint">

                <div className="firstPoint__rightTitle">
                    <p>Приложение №1</p>
                    <p>К Публичному кредитному договору</p>
                    <p>МКК «Келечек»</p>
                </div>

                <span className="firstPoint__startTitle">Перечень прав, расходов (платежей) и штрафных санкций</span>


                <span className="firstPoint__row firstPoint__bolderRow">
                    <span className="firstPoint__number">1.</span>
                    <span className="firstPoint__row-title">Права клиента</span>
                </span>

                <span className="firstPoint__row">
                    <span className="firstPoint__number">1.1</span>
                    <span className="firstPoint__row-title">Отказаться на безвозмездной основе от получения кредита с момента подписания Публичного кредитного договора до осуществления платежа в оплату за Товар по договору;</span>
                </span>

                <span className="firstPoint__row">
                    <span className="firstPoint__number">1.2</span>
                    <span className="firstPoint__row-title">Иметь доступ к Публичному кредитному договору со всеми прилагаемыми к нему документами и обратиться за юридической консультацией за пределами МКК, без ограничений по времени;</span>
                </span>

                <span className="firstPoint__row">
                    <span className="firstPoint__number">1.3</span>
                    <span className="firstPoint__row-title">Получить разъяснения по порядку расчетов платежей по кредиту, пени, штрафных санкций;</span>
                </span>


                <span className="firstPoint__row">
                    <span className="firstPoint__number">1.4</span>
                    <span className="firstPoint__row-title">Получить разъяснения по порядку расчетов платежей по кредиту, пени, штрафных санкций;</span>
                </span>

                <span className="firstPoint__row">
                    <span className="firstPoint__number">1.5</span>
                    <span className="firstPoint__row-title">Досрочно погасить задолженность по кредиту в полном объеме либо частично в любое время без оплаты неустойки или иных видов штрафных санкций;

 </span>
                </span>

                <p className="firstPoint__row firstPoint__bolderRow">
                    <span className="firstPoint__number">2.</span>
                    <span className="firstPoint__row-title">Расходы (платежи) по кредиту</span>
                </p>

                <div className="firstPoint__table">
                    <div className="firstPoint__table-column">
                        <span className="firstPoint__table-title">Сумма кредита</span>
                        <span className="firstPoint__table-title firstPoint__table-title-left">Указывается в МП</span>
                    </div>
                    <div className="firstPoint__table-column">
                        <span className="firstPoint__table-title">Процентные платежи по кредиту</span>
                        <span className="firstPoint__table-title firstPoint__table-title-left">0%</span>
                    </div>
                    <div className="firstPoint__table-column">
                        <span
                            className="firstPoint__table-title">Комиссия за рассмотрение заявки (оформление кредита)</span>
                        <span className="firstPoint__table-title firstPoint__table-title-left">Не предусмотрена</span>
                    </div>
                    <div className="firstPoint__table-column">
                        <span className="firstPoint__table-title">Комиссия за выдачу и администрирование кредита</span>
                        <span className="firstPoint__table-title firstPoint__table-title-left">Не предусмотрена</span>
                    </div>
                    <div className="firstPoint__table-column">
                        <span className="firstPoint__table-title">Комиссия за открытие и обслуживание ссудного и/или текущего счетов</span>
                        <span className="firstPoint__table-title firstPoint__table-title-left">Не предусмотрена</span>
                    </div>
                    <div className="firstPoint__table-column">
                        <span className="firstPoint__table-title">Комиссия за расчетно-кассовое обслуживание</span>
                        <span className="firstPoint__table-title firstPoint__table-title-left">Не предусмотрена</span>
                    </div>
                    <div className="firstPoint__table-column">
                        <span className="firstPoint__table-title">Штрафные санкции и пени</span>
                        <span className="firstPoint__table-title firstPoint__table-title-left">За просрочку оплаты платежей по основной сумме долга - пеня в размере 1 (один) % от просроченной суммы основного долга за каждый день просрочки. При этом размер пени, начисленной за весь период действия кредита не должен превышать 20 % (Двадцать процентов) от суммы выданного кредита.</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FirstPointRu;