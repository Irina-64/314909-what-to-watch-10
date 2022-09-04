import React from 'react';
import { ComponentText } from '../../const/enums';
import { TailSpin } from 'react-loader-spinner';
import './spinner.css';

const Spinner = () => <><TailSpin color="#C9B37E" height={100} width={100} />{ComponentText.Loading}</>;

export default Spinner;
