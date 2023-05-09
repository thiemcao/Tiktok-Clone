import styles from './Button.module.scss'
import className from 'classnames/bind'
import { Link } from 'react-router-dom'



const cx = className.bind(styles)

const Button = ({to ,onClick,rightIcon,leftIcon,outline = false,large =false,text, href , children,primary = false, ...passProps}) => {

    let Comp = 'button';

    const props ={
      ...passProps,
      onClick,
    };

    props.to = to
    Comp = Link
    if(to){
    }else if (href){
      props.href=href
      Comp = 'a'
    }

    const classes = cx('wrapper',{
      primary,
      outline,
      large,
      text,
    });

  return (
    
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
       <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}

    </Comp>
  )
}

export default Button;
