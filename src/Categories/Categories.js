import React, { Component } from 'react';
import { Grid, Cell } from 'styled-css-grid';
import styled from 'styled-components';
import Category from './Category';

const Title = styled.h1`
  text-align: center;
  font-family: futura;
  color: #fde834;
  font-size: 6 em;
`;

const TitleContainer = styled.div`
  background-color: #0a3181;
`;

export default class Categories extends Component {
  render() {
    return (
      <div>
        <TitleContainer>
          <Title>EKEA</Title>
        </TitleContainer>
        <Grid gap="0" columns={4} height="100vh">
          <Cell width={1} middle center>
            <Category
              name="Living Room"
              image={
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd">
                  <g
                    id="LivingRoom"
                    transform="translate(2.000000, 2.000000)"
                    fillRule="nonzero"
                    stroke="#FDE834"
                    strokeWidth="4">
                    <rect
                      id="Rectangle"
                      x="0"
                      y="0"
                      width="80"
                      height="60"
                      rx="15"
                    />
                    <path
                      d="M20,0 L60,0 L60,36 C60,38.209139 58.209139,40 56,40 L24,40 C21.790861,40 20,38.209139 20,36 L20,0 Z"
                      id="Rectangle-2"
                    />
                    <path
                      d="M18.5,60.5 L13.5,65.5"
                      id="Line"
                      strokeLinecap="square"
                    />
                    <path
                      d="M67.5,60.5 L62.5,65.5"
                      id="Line"
                      strokeLinecap="square"
                      transform="translate(65.000000, 63.000000) scale(-1, 1) translate(-65.000000, -63.000000) "
                    />
                  </g>
                </g>
              }
              bgimage="https://images.freeimages.com/images/large-previews/9c1/living-room-1560159.jpg"
            />
          </Cell>
          <Cell width={1} middle center>
            <Category
              name="Bedroom"
              image={
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="square">
                  <g
                    id="Bedroom"
                    transform="translate(2.000000, 2.000000)"
                    fillRule="nonzero"
                    stroke="#FDE834"
                    strokeWidth="4">
                    <path
                      d="M0.784313725,63.5294118 L47.8431373,63.5294118"
                      id="Line-3"
                    />
                    <path
                      d="M47.8431373,79.2156863 L47.8431373,63.5294118"
                      id="Line-4"
                    />
                    <path
                      d="M0.784313725,79.2156863 L0.784313725,63.5294118"
                      id="Line-4"
                    />
                    <path
                      d="M0.784313725,63.5294118 L32.1568627,16.4705882"
                      id="Line-5"
                    />
                    <path
                      d="M32.1568627,16.4705882 L79.2156863,16.4705882"
                      id="Line-6"
                    />
                    <path
                      d="M79.2156863,16.4705882 L47.8431373,63.5294118"
                      id="Line-7"
                    />
                    <path
                      d="M32.1568627,16.4705882 L32.1568627,0.784313725"
                      id="Line-8"
                    />
                    <path
                      d="M79.2156863,32.1568627 L79.2156863,0.784313725"
                      id="Line-8"
                    />
                    <path
                      d="M32.1568627,0.784313725 L79.2156863,0.784313725"
                      id="Line-9"
                    />
                  </g>
                </g>
              }
            />
          </Cell>
          <Cell width={1} middle center>
            <Category
              name="Bath"
              image={
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd">
                  <g
                    id="Bath"
                    transform="translate(2.000000, 2.000000)"
                    fillRule="nonzero"
                    stroke="#FDE834"
                    strokeWidth="4">
                    <path
                      d="M0.655737705,28.852459 L0.655737705,81.3114754"
                      id="Line-2"
                      strokeLinecap="square"
                    />
                    <path
                      d="M79.3442623,28.852459 L79.3442623,81.3114754"
                      id="Line-2"
                      strokeLinecap="square"
                    />
                    <path
                      d="M0.655737705,28.852459 L79.3442623,28.852459"
                      id="Line-10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M0.655737705,68.1967213 L79.3442623,68.1967213"
                      id="Line-10"
                      strokeLinecap="square"
                    />
                    <path
                      d="M40,28.852459 L40,68.1967213"
                      id="Line-11"
                      strokeLinecap="square"
                    />
                    <path
                      d="M53.1147541,28.852459 C61.8574904,28.852459 66.2290751,24.4808743 66.2295082,15.7377049 L13.7704918,15.7377049 C13.7704918,24.4808743 18.1420765,28.852459 26.8852459,28.852459 C40,28.852459 40.0006496,28.852459 53.1147541,28.852459 Z"
                      id="Path-2"
                    />
                    <path
                      d="M40,15.7377049 C40,11.3661202 40,6.99453552 40,2.62295082 C40,-0.87431694 38.9071038,-0.87431694 36.7213115,2.62295082"
                      id="Path-3"
                    />
                  </g>
                </g>
              }
            />
          </Cell>
          <Cell width={1} middle center>
            <Category
              name="Kitchen"
              image={
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd">
                  <g
                    id="Kitchen"
                    transform="translate(2.000000, 2.000000)"
                    fillRule="nonzero"
                    stroke="#FDE834"
                    strokeWidth="4">
                    <path
                      d="M10,82 L70,82 L70,32 C70,12 60,2 40,2 C20,2 10,12 10,32 L10,82 Z"
                      id="Path-4"
                    />
                    <path
                      d="M80,32 L0,32"
                      id="Line-12"
                      strokeLinecap="square"
                    />
                    <polygon
                      id="Path-5"
                      points="40.5 2 40.5 1 42 1 42.5 0.5 42 0 38 0 37.5 0.5 38 1 39.5 1 39.5 2"
                    />
                  </g>
                </g>
              }
            />
          </Cell>
          <Cell width={1} middle center>
            <Category
              name="Dining"
              image={
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd">
                  <g
                    id="Dining"
                    transform="translate(2.000000, 2.000000)"
                    fillRule="nonzero"
                    stroke="#FDE834"
                    strokeWidth="4">
                    <ellipse
                      id="Oval"
                      cx="39.7515528"
                      cy="29.8136646"
                      rx="39.7515528"
                      ry="29.8136646"
                    />
                    <path
                      d="M40.4968944,61.3664596 L40.4968944,88.1987578"
                      id="Line-13"
                      strokeLinecap="square"
                    />
                    <path
                      d="M0.25,32.5465839 L0.25,59.378882"
                      id="Line-13"
                      strokeLinecap="square"
                    />
                    <path
                      d="M79.7531056,32.5465839 L79.7531056,59.378882"
                      id="Line-13"
                      strokeLinecap="square"
                    />
                  </g>
                </g>
              }
            />
          </Cell>
          <Cell width={1} middle center>
            <Category
              name="Textile"
              image={
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd">
                  <g
                    id="Textile"
                    transform="translate(3.000000, 2.000000)"
                    fillRule="nonzero"
                    stroke="#FDE834"
                    strokeWidth="4">
                    <polygon id="Rectangle-3" points="30 0 80 0 60 60 10 60" />
                    <path
                      d="M10,60 L0,90"
                      id="Line-14"
                      strokeLinecap="square"
                    />
                    <path
                      d="M20,60 L10,90"
                      id="Line-14"
                      strokeLinecap="square"
                    />
                    <path
                      d="M30,60 L20,90"
                      id="Line-14"
                      strokeLinecap="square"
                    />
                    <path
                      d="M40,60 L30,90"
                      id="Line-14"
                      strokeLinecap="square"
                    />
                    <path
                      d="M50,60 L40,90"
                      id="Line-14"
                      strokeLinecap="square"
                    />
                    <path
                      d="M60,60 L50,90"
                      id="Line-14"
                      strokeLinecap="square"
                    />
                  </g>
                </g>
              }
            />
          </Cell>
          <Cell width={1} middle center>
            <Category
              name="Business"
              image={
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd">
                  <g
                    id="Business"
                    transform="translate(5.000000, 2.000000)"
                    fillRule="nonzero"
                    stroke="#FDE834"
                    strokeWidth="4">
                    <path
                      d="M0,1.13686838e-13 C5.24590164,1.13686838e-13 0,1.13686838e-13 13.1147541,1.23788047e-13 C19.1561356,9.0620722 23.5277203,22.1768263 26.2295082,39.3442623 L13.1147541,39.3442623 C13.1147541,22.295082 8.7431694,9.18032787 0,1.13686838e-13 Z"
                      id="Rectangle-4"
                    />
                    <path
                      d="M52.4590164,39.3442623 L13.1147541,39.3442623"
                      id="Line-15"
                      strokeLinecap="square"
                    />
                    <path
                      d="M33.1147541,39.6721311 L33.1147541,65.2459016"
                      id="Line-16"
                      strokeLinecap="square"
                    />
                    <path
                      d="M39.0163934,65.2459016 L26.557377,65.2459016"
                      id="Line-17"
                      strokeLinecap="square"
                    />
                    <rect
                      id="Rectangle-5"
                      x="54.4590164"
                      y="64.295082"
                      width="22.2295082"
                      height="1"
                    />
                    <path
                      d="M65.5737705,62.295082 L65.5737705,31.4754098"
                      id="Line-18"
                      strokeLinecap="square"
                    />
                    <path
                      d="M79.6721311,31.147541 L51.4754098,31.147541"
                      id="Line-19"
                      strokeLinecap="square"
                    />
                    <g id="Group" transform="translate(55.737705, 17.049180)">
                      <path
                        d="M8.85272256,2 L7.02977174,11.1147541 L16.0653102,11.1147541 L17.888261,2 L8.85272256,2 Z"
                        id="Rectangle-6"
                      />
                      <path
                        d="M15.7377049,12.7868852 L0,12.7868852"
                        id="Line-20"
                        strokeLinecap="square"
                      />
                    </g>
                  </g>
                </g>
              }
            />
          </Cell>
          <Cell width={1} middle center>
            <Category
              name="Outdoor"
              image={
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd">
                  <g
                    id="Outdoor"
                    transform="translate(-13.000000, -6.000000)"
                    fillRule="nonzero"
                    stroke="#FDE834"
                    strokeWidth="4">
                    <path
                      d="M9.96545019,78.8831813 C9.96545019,78.8831813 36.6321169,78.8831813 89.9654502,78.8831813 C89.9654502,38.8831813 76.6321169,18.8831813 49.9654502,18.8831813 C9.96545019,18.8831813 9.96545019,78.8831813 9.96545019,78.8831813 Z"
                      id="Path-6"
                      transform="translate(49.965450, 48.883181) rotate(-39.000000) translate(-49.965450, -48.883181) "
                    />
                    <path
                      d="M22.773583,27.1040132 L22.773583,7.10401318"
                      id="Line-21"
                      strokeLinecap="square"
                      transform="translate(22.773583, 17.104013) rotate(-39.000000) translate(-22.773583, -17.104013) "
                    />
                    <path
                      d="M87.9332918,66.0897973 L87.9332918,131.089797"
                      id="Line-22"
                      strokeLinecap="square"
                      transform="translate(87.933292, 98.589797) rotate(-39.000000) translate(-87.933292, -98.589797) "
                    />
                  </g>
                </g>
              }
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}
