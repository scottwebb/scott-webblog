import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

import { Icon } from '@types';

const Logo: Icon = ({ fill = "white" }) => {
  return (
    <LogoContainer>
      <svg
        width="45"
        height="45" 
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Desktop"
      >
        <image id="Background" width="100" height="100" href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAFU0lEQVR4nO2cTShtURSA1/sphTskEZFkIAMjoRiIREkpIyRkYuBnIiaeiTIQBpihjIgyFCN/SRmRUhIpAwZKMfPzWue5N65zzj17n733Wee1vrrpOj933/Pdvfdaa597f0QikXdgSPD6+go/WQUN3t7erAcLIQCKwN6BsJCA+SwDWEiwxMsAFhIcdjKAhQSDkwxgIeZxkwEsxCyJZAALMYcXGcBCzOBVBrAQ/YjIABaiF1EZwEL0ISMDWIgeZGUAC1GPHxnAQtTiVwawEHWokAEsRA2qZAAL8Y9KGcBC/KFaBrAQeXTIABYihy4ZwELE0SkDWIgYumUAC/GOCRnAQrxhSgawkMSYlAEsxB3TMoCFOBOEDGAh9gQlA/kdyKv6ZGZmxjpBfX09pKenfznZ0tIS9PX1Sb9AkDIgTEKampqgtbUVampqXPfr6Oiw/spICVoGEoov7KytrSUU8Znn52fIzMwUeg0KMoB6D8nPz4f19XXIy8sTOi4lJUVofyoygPqkLiMDubq6+va/hYUFeHx8tB77+/vWEAjEZABlIXgBZWQgy8vLX57jkNfc3Bx7XlxcDHNzc1BeXk5KBlAVUlFR8eUCeuXw8BAGBgZgcnIydgQOe3bzDw5r3d3dJt6OECTnkK6uroT7YHi7uroKBwcHrvtVVVU5botEIlLt0wlJIXV1dY7bcH7A3nN5eenpXDs7O47bbm9vpdqnE3JDFg5XTlEShrMiMhDcF3tTPPf39zA9Pa2q2cogJ6SwsNBx28nJiZCMKJgkYnYfjb4WFxeteeXi4sJvc5UTqtLJ09OT1HEY2g4PD1sP6oSquJiamip8DLU8IxHkhLhNwmVlZdDZ2en5XGGTARSF4Bxhl2lHmZqailV73QijDKA6ZLn1Evio6GIJBLN5ux4TVhlAtdqL2fXe3p5QkXB7e9vKK1ZWVhIKpQzZ8jsOS9G1DRkwtL25uYGJiYkg34YwpNdD/EqJgnIwCaSYd8RDfoFKlRT4ENPb26vkXLr4lZSU9IdyAzc3N+H8/BwyMjIgOzvb17lKSkqgsbHRmmMeHh6UtVElofrNRVxUwgsqU5r/DIbVRUVFqpunhND+CObg4CDk5ORAS0uL8JItfKxGtrW1aWmbH0IpJD7PKCgogP7+fsjKyoLa2lrP58Ey/+7urqZWyhE6ISgChbjR09Nj3bOVSA7FXhIqIaIZeGVlJczPzzuuzVOcS0IjxEvPsAOlYKRmBy54paWlaW+7CKEQIisjyvX19bdbTqMkJyf7bp9KSC9QYVL4/v7v8+In05aJwoKCpBBcV8d18M+f6oaGBmhvbxeOinCCdxKC6+rUIFl+x4Jg/BCDzzEqGhoa8nweTCBHRkYct8usz+uGpBC8s9AO/KSPjo7C2dkZzM7OWvmHHdgrNjY2rDsYneYOZGtry9A78g65SR0n8Lu7O+3jPg5Xubm5Wl9DBlI9JBpN4R2JusH8hCJkekh8aHt0dOQ4dPmFah0LqPQQuzyjtLTUunCqwXmDqgygIMQt6cMLh0VDVeHp2NhY7HshVAl0yBLJwMfHx6G6ulpqGOMlXA/4KYdgyAsfyaJdWHt6egrHx8d8k4NX/Nam/meMzyEswx2jQlhGYowJYRneMCKEZXhHuxCWIYZWISxDHG1CWIYcWoSwDHmUC2EZ/lAqhGX4R5kQlqEGJUJYhjp8C2EZavElhGWoR1oIy9CDlBCWoQ9hISxDL0JCWIZ+PAthGWbwJIRlmCOhEJZhFlchLMM8jkJYRjDYCmEZwfFNCMsIli9CWEbwxISwDBpYQlgGHX6/vLzEvgvOBAwA/AWHsTtSWeB6nwAAAABJRU5ErkJggg==" alt="Scott Webb Photography | London Ontario Architectural Photographer"/>
        <g fill={fill} fill-rule="evenodd">
          
        </g>
      </svg>

      <svg
        width="32"
        height="32"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Mobile"
      >
        <image id="Background" width="100" height="100" href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAFU0lEQVR4nO2cTShtURSA1/sphTskEZFkIAMjoRiIREkpIyRkYuBnIiaeiTIQBpihjIgyFCN/SRmRUhIpAwZKMfPzWue5N65zzj17n733Wee1vrrpOj933/Pdvfdaa597f0QikXdgSPD6+go/WQUN3t7erAcLIQCKwN6BsJCA+SwDWEiwxMsAFhIcdjKAhQSDkwxgIeZxkwEsxCyJZAALMYcXGcBCzOBVBrAQ/YjIABaiF1EZwEL0ISMDWIgeZGUAC1GPHxnAQtTiVwawEHWokAEsRA2qZAAL8Y9KGcBC/KFaBrAQeXTIABYihy4ZwELE0SkDWIgYumUAC/GOCRnAQrxhSgawkMSYlAEsxB3TMoCFOBOEDGAh9gQlA/kdyKv6ZGZmxjpBfX09pKenfznZ0tIS9PX1Sb9AkDIgTEKampqgtbUVampqXPfr6Oiw/spICVoGEoov7KytrSUU8Znn52fIzMwUeg0KMoB6D8nPz4f19XXIy8sTOi4lJUVofyoygPqkLiMDubq6+va/hYUFeHx8tB77+/vWEAjEZABlIXgBZWQgy8vLX57jkNfc3Bx7XlxcDHNzc1BeXk5KBlAVUlFR8eUCeuXw8BAGBgZgcnIydgQOe3bzDw5r3d3dJt6OECTnkK6uroT7YHi7uroKBwcHrvtVVVU5botEIlLt0wlJIXV1dY7bcH7A3nN5eenpXDs7O47bbm9vpdqnE3JDFg5XTlEShrMiMhDcF3tTPPf39zA9Pa2q2cogJ6SwsNBx28nJiZCMKJgkYnYfjb4WFxeteeXi4sJvc5UTqtLJ09OT1HEY2g4PD1sP6oSquJiamip8DLU8IxHkhLhNwmVlZdDZ2en5XGGTARSF4Bxhl2lHmZqailV73QijDKA6ZLn1Evio6GIJBLN5ux4TVhlAtdqL2fXe3p5QkXB7e9vKK1ZWVhIKpQzZ8jsOS9G1DRkwtL25uYGJiYkg34YwpNdD/EqJgnIwCaSYd8RDfoFKlRT4ENPb26vkXLr4lZSU9IdyAzc3N+H8/BwyMjIgOzvb17lKSkqgsbHRmmMeHh6UtVElofrNRVxUwgsqU5r/DIbVRUVFqpunhND+CObg4CDk5ORAS0uL8JItfKxGtrW1aWmbH0IpJD7PKCgogP7+fsjKyoLa2lrP58Ey/+7urqZWyhE6ISgChbjR09Nj3bOVSA7FXhIqIaIZeGVlJczPzzuuzVOcS0IjxEvPsAOlYKRmBy54paWlaW+7CKEQIisjyvX19bdbTqMkJyf7bp9KSC9QYVL4/v7v8+In05aJwoKCpBBcV8d18M+f6oaGBmhvbxeOinCCdxKC6+rUIFl+x4Jg/BCDzzEqGhoa8nweTCBHRkYct8usz+uGpBC8s9AO/KSPjo7C2dkZzM7OWvmHHdgrNjY2rDsYneYOZGtry9A78g65SR0n8Lu7O+3jPg5Xubm5Wl9DBlI9JBpN4R2JusH8hCJkekh8aHt0dOQ4dPmFah0LqPQQuzyjtLTUunCqwXmDqgygIMQt6cMLh0VDVeHp2NhY7HshVAl0yBLJwMfHx6G6ulpqGOMlXA/4KYdgyAsfyaJdWHt6egrHx8d8k4NX/Nam/meMzyEswx2jQlhGYowJYRneMCKEZXhHuxCWIYZWISxDHG1CWIYcWoSwDHmUC2EZ/lAqhGX4R5kQlqEGJUJYhjp8C2EZavElhGWoR1oIy9CDlBCWoQ9hISxDL0JCWIZ+PAthGWbwJIRlmCOhEJZhFlchLMM8jkJYRjDYCmEZwfFNCMsIli9CWEbwxISwDBpYQlgGHX6/vLzEvgvOBAwA/AWHsTtSWeB6nwAAAABJRU5ErkJggg==" alt="Scott Webb Photography | London Ontario Architectural Photographer"/>
       
      </svg>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;
