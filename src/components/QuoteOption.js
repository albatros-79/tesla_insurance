import React, { useState } from 'react';
import { Select, Row, Col, Button } from 'antd';
import carImg from '../assets/car.png';
import footerImg from '../assets/footer-mark.png';
import WithWindowDimensions from './WithWindowDimensions';

const { Option } = Select;

// export default function QuoteOption({ onClickNext }) {
const QuoteOption = ({ onClickNext, windowWidth }) => {
  const [state, setState] = useState({
    model: 'models',
    type: 'performance',
    color: 'white',
    wheel: '20-silver',
    interior: 'black',
    autoPilot: 'full-driving',
    year: '2019'
  });

  const handleChange = (type) => (value) => {
    setState({
      ...state,
      [type]: value
    });
  };

  const maxYear = new Date().getFullYear() - 18;
  const yearRange = maxYear - 1919;
  return (
    <div className="quote-option-div">
      <div className="car-info  d-flex-column align-items-center pt-140 pb-80">
        <div className={`text-center ${windowWidth > 1400 ? 'w-70-p' : 'w-90-p'}`}>
          <div className="font-size-20 text-left ja-tag">
            {/* Tesla owners can enjoy an important Tesla and a comfortable and safe car life every day. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Maecenas mattis, velit vel iaculis rhoncus */}
            人とクルマの毎日に安心をお届けします。万が一の事故や故障のときにも､｢3つの基本補償」と「3つの基本特約」でしっかりカバーします。
          </div>
          <div className="font-size-24 pt-60 pb-40" style={{ color: '#171a20' }}>
            お車の情報
          </div>
          <Select
            value={state.model}
            onChange={handleChange('model')}
            className="model-select"
            dropdownClassName="model-select-dropdown"
          >
            <Option value="models">Model S</Option>
            <Option value="model3">Model 3</Option>
            <Option value="modelx">Model X</Option>
            <Option value="modely">Model Y</Option>
          </Select>
          <div className="w-100-p pt-68">
            <img src={carImg} alt="car" className="w-60-p" />
          </div>
          <Row gutter={windowWidth > 1700 ? 120 : 40} className="car-info-div">
            <Col span={24} lg={12}>
              <div className="title ja-tag">車</div>
              <Select
                className="w-100-p car-info-select"
                defaultValue="performance"
                dropdownClassName="car-info-select-drop"
              >
                <Option value="performance">パフォーマンス</Option>
                <Option value="long_range">ロングレンジ</Option>
              </Select>
            </Col>
            <Col span={24} lg={12}>
              <div className="title">カラー</div>
              <Select
                className="w-100-p car-info-select"
                defaultValue="Pearl_White_Multi_Coat"
                dropdownClassName="car-info-select-drop"
              >
                <Option value="Pearl_White_Multi_Coat">パールホワイト マルチコート</Option>
                <Option value="Solid_Black">ソリッドブラック</Option>
                <Option value="Midnight_Silver_Metallic">ミッドナイト シルバー メタリック</Option>
                <Option value="Deep_Blue_Metallic">ディープブルー メタリック</Option>
                <Option value="Red_Multi_Coat">レッド マルチコート</Option>
              </Select>
            </Col>
            <Col span={24} lg={12}>
              <div className="title">ホイール</div>
              <Select
                className="w-100-p car-info-select"
                defaultValue="19_Tempest_Wheels"
                dropdownClassName="car-info-select-drop"
              >
                <Option value="19_Tempest_Wheels">19インチ シルバー ホイール</Option>
                {/* <Option value='19_Sonic_Carbon_Slipstream_Wheels'>21インチ ソニック カーボン ツインタービン ホイール</Option> */}
                <Option value="21_Sonic_Carbon_Twin_Turbine_Wheels">
                  21インチ ソニック カーボン ツインタービン ホイール
                </Option>
              </Select>
            </Col>
            <Col span={24} lg={12}>
              <div className="title">インテリア</div>
              <Select
                className="w-100-p car-info-select"
                defaultValue="All_Black"
                dropdownClassName="car-info-select-drop"
              >
                <Option value="All_Black">オールブラック</Option>
                <Option value="Black_and_White">ブラック/ホワイト</Option>
                <Option value="Cream">クリーム</Option>
              </Select>
            </Col>
            <Col span={24} lg={12}>
              <div className="title">オートパイロット</div>
              <Select
                className="w-100-p car-info-select"
                defaultValue="Full_Self_Driving_Capability"
                dropdownClassName="car-info-select-drop"
              >
                <Option value="none">お選びください</Option>
                <Option value="Full_Self_Driving_Capability">完全自動運転 対応機能</Option>
              </Select>
            </Col>
            <Col span={24} lg={12}>
              <div className="title">年</div>
              <Select className="w-100-p car-info-select" defaultValue="2019" dropdownClassName="car-info-select-drop">
                {new Array(50).fill(undefined).map((data, index) => (
                  <Option key={index} value={maxYear + 18 - index + ''}>
                    {maxYear + 18 - index}
                  </Option>
                ))}
              </Select>
            </Col>
          </Row>
        </div>
      </div>
      <div className="personal-info d-flex-column align-items-center">
        <div className={`${windowWidth > 1400 ? 'w-70-p' : 'w-90-p'}`}>
          <div className="px-10-p">
            <div className="g-title ja-tag">お見積もり条件入力</div>
            <div className="sub-title">現在の等級（ノンフリート等級）</div>
            <Select defaultValue="First_time_joining" dropdownClassName="car-info-select-drop">
              <Option value="First_time_joining">初めて加入</Option>
              <Option value="6S_grade">6S等級</Option>
              <Option value="6F_or_6_grade">6Fまたは6等級</Option>
              <Option value="7S_grade">7S等級</Option>
              <Option value="7F_or_7_grade">7Fまたは7等級</Option>
              <Option value="8_grade">8等級</Option>
              <Option value="9_grade">9等級</Option>
              <Option value="10_grade">10等級</Option>
              <Option value="11_grade">11等級</Option>
              <Option value="12_grade">12等級</Option>
              <Option value="13_grade">13等級</Option>
              <Option value="14_grade">14等級</Option>
              <Option value="15_grade">15等級</Option>
              <Option value="16_grade">16等級</Option>
              <Option value="17_grade">17等級</Option>
              <Option value="18_grade">18等級</Option>
              <Option value="19_grade">19等級</Option>
              <Option value="20_grade">20等級</Option>
            </Select>
            <div className="sub-title pt-24">記名被保険者(見積対象のお車を主に使用される方)の生年月日</div>
            <Row gutter={32}>
              <Col span={24} lg={8} className="pb-20">
                <Select dropdownClassName="car-info-select-drop" defaultValue="1990">
                  {new Array(yearRange).fill(undefined).map((data, index) => (
                    <Option key={index} value={index + 1920 + ''}>
                      {1920 + index} 年
                    </Option>
                  ))}
                </Select>
              </Col>
              <Col span={24} lg={8} className="pb-20">
                <Select defaultValue="1" dropdownClassName="car-info-select-drop">
                  {new Array(12).fill(undefined).map((data, index) => (
                    <Option key={index} value={index + 1 + ''}>
                      {1 + index} 月
                    </Option>
                  ))}
                </Select>
              </Col>
              <Col span={24} lg={8} className="pb-20">
                <Select defaultValue="1" dropdownClassName="car-info-select-drop">
                  {new Array(31).fill(undefined).map((data, index) => (
                    <Option key={index} value={index + 1 + ''}>
                      {1 + index} 日
                    </Option>
                  ))}
                </Select>
              </Col>
            </Row>
            <div className="g-title pt-40 ja-tag">補償範囲</div>
            <div className="sub-title">補償を受けられる運転者を限定されますか？</div>
            <Select defaultValue="not_limited" dropdownClassName="car-info-select-drop">
              <Option value="not_limited">限定しない</Option>
              <Option value="limited_to_registered_insured">記名被保険者に限定する</Option>
              <Option value="named_insured_limited_spouse">記名被保険者とその配偶者に限定する</Option>
            </Select>
            <div className="sub-title pt-24">
              「同居のご家族等」*の中で、見積対象のお車を運転される方のうち、最も若い方の年齢をお選びください。
            </div>
            <Select defaultValue="under_20" dropdownClassName="car-info-select-drop">
              <Option value="under_20">20歳以下</Option>
              <Option value="from_21_to_25">21～25歳</Option>
              <Option value="from_26_to_34">26～34歳</Option>
              <Option value="over_35">35歳以上</Option>
            </Select>
            <div className="g-title pt-60 pb-52 ja-tag">
              記名被保険者(見積対象のお車を主に使用される方)の免許証の種類（色）
            </div>
            <Select defaultValue="gold" dropdownClassName="car-info-select-drop">
              <Option value="gold">ゴールド</Option>
              <Option value="blue_or_green">ブルーまたはグリーン</Option>
              <Option value="green">その他</Option>
            </Select>
          </div>
        </div>
      </div>
      <div className="text-center footer">
        <Button type="primary" onClick={(e) => onClickNext(1)}>
          お見積もり
        </Button>
        <div>
          <img src={footerImg} alt="footer" />
        </div>
      </div>
    </div>
  );
};

export default WithWindowDimensions(QuoteOption);
