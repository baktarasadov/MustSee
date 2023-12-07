
export interface IInputProps {
    id?: string;
    type?: string
    name?: string
    className?: string
    value?: string
    placeholder?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void

}