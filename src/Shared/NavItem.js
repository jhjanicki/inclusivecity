import { Link, useLocation } from 'react-router-dom';
import { pages } from './translations';


export const LinkWithQuery = ({ children, to, ...props }) => {
    const { search } = useLocation();

    return (
      <Link to={to + search} {...props}>
        {children}
      </Link>
    );
  };

export const NavItem = (props) =>{

    return <li className="nav-item">
                {props.withQuery?
                <LinkWithQuery className="nav-link" to={props.url}>
                  {props.subpageName===""? <span>{pages[props.pageName].pageName[props.language]}</span>:
                  ( <div>
                     {pages[props.pageName].pageName[props.language]}
                  </div>)
                  }
                </LinkWithQuery>:
                <Link className="nav-link" to={props.url}>
                    <div>
                      {pages[props.pageName].pageName[props.language]}
                    </div>
                </Link>}
                {props.children}
           </li>
}