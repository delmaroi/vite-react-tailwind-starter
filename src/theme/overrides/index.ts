import { merge } from 'lodash';
import { Theme } from '@mui/material/styles';
import Input from './Input';
import Button from './Button';
import IconButton from './IconButton';

export default function ComponentsOverrides(theme: Theme) {
  return merge(Input(theme), Button(theme), IconButton(theme));
}
