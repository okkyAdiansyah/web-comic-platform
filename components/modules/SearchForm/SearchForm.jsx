import { Button } from "@/components/elements/Button";
import Input from "@/components/elements/Input/Input";
import styles from "@/styles/components/modules/searchForm.module.scss";

/**
 * Search form
 * 
 * @prop callback 'action' Form actions to submit search
 */
const SearchForm = ({action}) => {
    return(
        <>
            <form action={action} className={styles['searchForm-container']} method="GET">
                <Input 
                    type={'search'}
                    id={'search'}
                    placeholder={'Search...'}
                    className={styles['searchForm__input']}
                />
                <Button.Submit
                    submitFor={'submit__search'}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 16 16"><path fill="white" fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06zM10.5 7a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0" clipRule="evenodd"/></svg>
                </Button.Submit>
            </form>
        </>
    )
}

export default SearchForm;