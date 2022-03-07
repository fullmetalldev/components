import React from 'react';
import "./docStyles.css"
import "./firstPoint.css"

const FirstPointKG = () => {
    return (
        <div className="documentWrapper">
            <div className="firstPoint">

                <div className="firstPoint__rightTitle">
                    <p>“Келечек” МНКнын</p>
                    <p>Айкын насыя келишимине</p>
                    <p>№ 1 тиркеме</p>
                </div>

                <span className="firstPoint__startTitle">
                    Укуктардын, чыгымдардын (төлөмдөрдүн) жана айып санкцияларынын тизмеги
                </span>


                <span className="firstPoint__row firstPoint__bolderRow">
                    <span className="firstPoint__number">1.</span>
                    <span className="firstPoint__row-title"> Кардардын укугу</span>
                </span>

                <span className="firstPoint__row">
                    <span className="firstPoint__number">1.1</span>
                    <span className="firstPoint__row-title">Айкын насыя келишимине кол койгон учурдан тартып, келишим боюнча Товар үчүн төлөм ишке ашканга чейин кайтарымсыз негизде насыяны алуудан баш тартууга;</span>
                </span>

                <span className="firstPoint__row">
                    <span className="firstPoint__number">1.2</span>
                    <span className="firstPoint__row-title"> Айкын насыя келишимге, ага тиркелген бардык документтерге жетүүгө мүмкүнчүлүгү бар жана убакыт жагынан чектелбестен МНКнын чегинен тышкары юридикалык консультацияга кайрылууга;</span>
                </span>

                <span className="firstPoint__row">
                    <span className="firstPoint__number">1.3</span>
                    <span className="firstPoint__row-title">Насыя, туум, айып санкциялар боюнча төлөмдөрдүн эсептеринин тартиби боюнча түшүндүрмө алууга;</span>
                </span>


                <span className="firstPoint__row">
                    <span className="firstPoint__number">1.4</span>
                    <span className="firstPoint__row-title"> Насыя келишими жана ушул тизмек түзүлө турган (таризделген) тилди (мамлекеттик же расмий) тандоого;</span>
                </span>

                <span className="firstPoint__row">
                    <span className="firstPoint__number">1.5</span>
                    <span className="firstPoint__row-title"> Насыя боюнча карызды үстөк айып же айып санкцияларынын башка түрлөрүн төлөбөстөн каалаган учурда, мөөнөтүнөн мурда толук көлөмдө же бөлүп төлөөгө.</span>
                </span>

                <p className="firstPoint__row firstPoint__bolderRow">
                    <span className="firstPoint__number">2.</span>
                    <span className="firstPoint__row-title">Насыя боюнча чыгымдар (төлөмдөр)</span>
                </p>

                <div className="firstPoint__table">
                    <div className="firstPoint__table-column">
                        <span className="firstPoint__table-title">Насыянын суммасы</span>
                        <span className="firstPoint__table-title firstPoint__table-title-left">МТда көрсөтүлөт</span>
                    </div>
                    <div className="firstPoint__table-column">
                        <span className="firstPoint__table-title">Насыя боюнча пайыздык төлөмдөр</span>
                        <span className="firstPoint__table-title firstPoint__table-title-left">0%</span>
                    </div>
                    <div className="firstPoint__table-column">
                        <span className="firstPoint__table-title">Өтүнмөнү карагандыгы үчүн комиссия (насыяны тариздөө)</span>
                        <span className="firstPoint__table-title firstPoint__table-title-left">Каралган эмес</span>
                    </div>
                    <div className="firstPoint__table-column">
                        <span className="firstPoint__table-title">Насыяны берүү жана башкаруу үчүн комиссия</span>
                        <span className="firstPoint__table-title firstPoint__table-title-left">Каралган эмес</span>
                    </div>
                    <div className="firstPoint__table-column">
                        <span className="firstPoint__table-title">Ссудалык жана/же күндөлүк эсептерди ачуу жана тейлөө үчүн комиссия</span>
                        <span className="firstPoint__table-title firstPoint__table-title-left">Каралган эмес</span>
                    </div>
                    <div className="firstPoint__table-column">
                        <span className="firstPoint__table-title">Эсептик-кассалык тейлөө үчүн комиссия</span>
                        <span className="firstPoint__table-title firstPoint__table-title-left">Каралган эмес</span>
                    </div>
                    <div className="firstPoint__table-column">
                        <span className="firstPoint__table-title">Айып санкциялар жана туумдар</span>
                        <span className="firstPoint__table-title firstPoint__table-title-left">Карыздын негизги сумма боюнча төлөөнү узарткандыгы үчүн – туум, узартылган ар бир күн үчүн негизги карыздын узартылган суммасынан 1 (бир) % өлчөмдө. Мында, насыя колдонулган бардык мезгили үчүн туумдун өлчөмү, берилген насыянын суммасынан 20% (жыйырма пайыздан) ашпоого тийиш.</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FirstPointKG;