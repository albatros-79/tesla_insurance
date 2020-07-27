import React from 'react';
import carImg from '../assets/car.png';
import userImg from '../assets/user.png';
import chatImg from '../assets/chat.png';
import { Row, Col, Input, Button } from 'antd';
import WithWindowDimensions from './WithWindowDimensions';

const QuoteNotify = ({ windowWidth, onHandle }) => {
  return (
    <div className="quote-notify-div d-flex-column align-items-center">
      <div className={`${windowWidth > 1400 ? 'w-70-p' : 'w-80-p'} py-128`}>
        <div className="text-center font-size-24 ja-tag" style={{ color: '#171a20' }}>
          お見積もり結果
        </div>
        <div className="text-center font-size-18 ja-tag pt-em-2">
          2020年7月24日現在の料率 （沖縄県以外の料率）で、保険期間1年間としてお見積もりしています。
        </div>
        <div className="text-center font-size-16 ja-tag">
          （お見積もりの時期によっては、料率が変わることもございます。ご了承ください。）
        </div>
        <div className="pt-60 car-img-div w-100-p text-center">
          <img src={carImg} alt="car" className="w-100-p" />
        </div>
        <div className="pt-24">
          <Row>
            <Col span={24} xl={12}>
              <div className="text-center color-black">
                <span style={{ fontSize: '50px' }}>84,880</span>
                <span className="font-size-30 ja-tag">円</span>
              </div>
              <div className="font-size-18 text-center ja-tag">一時払(年間保険料)</div>
            </Col>
            <Col span={24} xl={12}>
              <div className="text-center">
                <span className="color-primary" style={{ fontSize: '50px' }}>
                  7,430
                </span>
                <span className="font-size-30 ja-tag color-primary">円</span>
              </div>
              <div className="font-size-18 text-center ja-tag">月払</div>
            </Col>
          </Row>
        </div>
        <div className="text-center font-size-24 pt-120 ja-tag" style={{ color: '#171a20' }}>
          お見積もり等のご相談
        </div>
        <div className="ja-tag font-size-18 pt-40 pb-60">
          かんたん見積もりでご案内しております保険料は概算です。さらに詳しいお見積もりやご契約のご相談については、代理店または東京海上日動にて承っております。
        </div>
        <Row gutter={windowWidth > 1800 ? 100 : 40}>
          <Col span={24} xxl={12} className="mb-20">
            <div
              className={`bg-f4 border-radius-20 call-chat-button ${
                windowWidth > 720 ? 'd-flex' : 'd-flex-column small'
              } px-40 align-items-center`}
            >
              <div className="pr-40">
                <img src={userImg} alt="img" />
              </div>
              <div className={`${windowWidth > 720 ? 'none' : 'text-center pt-20'}`}>
                <div className="font-size-18 font-weight-600 color-black">今すぐお電話ください</div>
                <div className="font-size-18">オペレーターと一緒に手順を完了し、保険に加入してください。</div>
              </div>
            </div>
          </Col>
          <Col span={24} xxl={12} className="mb-20">
            <div
              className={`bg-f4 border-radius-20 call-chat-button ${
                windowWidth > 720 ? 'd-flex' : 'd-flex-column small'
              } px-40 align-items-center`}
            >
              <div className="pr-40">
                <img src={chatImg} alt="img" />
              </div>
              <div className={`${windowWidth > 720 ? 'none' : 'text-center pt-20'}`}>
                <div className="font-size-18 font-weight-600 color-black">ライブチャット</div>
                <div className="font-size-18">オペレーターと一緒に手順を完了し、保険に加入してください。</div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="border-radius-25 bg-f4 p-relative my-80 py-12 px-40">
          <div
            className="font-size-18 p-absolute font-weight-500 color-black"
            style={windowWidth > 600 ? { display: 'block' } : { top: -35 }}
          >
            あなたのID
          </div>
          <div
            className={`font-size-20 ${
              windowWidth > 1000 ? 'text-center' : windowWidth < 600 ? 'text-left' : 'text-right'
            }`}
          >
            AD 1032
          </div>
        </div>
        <div className="text-center font-size-18 pb-12">これらの情報をメールで送ってください</div>
        <div className="send-div p-relative">
          <Input placeholder="メールアドレスを入力してください" />
          <Button type="primary" onClick={(e) => onHandle(0)}>
            送る
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WithWindowDimensions(QuoteNotify);
