import useNavigation from "../hooks/useNavigation";
import classNames from "classnames";
function Link ({to,children,className,activeClassName}){

    const { navigate,currentPath } = useNavigation();
    const classes=classNames('text-blue-500',className,
        currentPath===to && activeClassName
    );
    const handleClick=(event)=>{
        if(event.ctrlKey || event.metaKey){
            return;
        }
        event.preventDefault();
        navigate(to);
    };

    return <a href={to} className={classes} onClick={handleClick}>{children}</a>
};

export default Link;