import { Controller } from "react-hook-form"
import { Label } from "../ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const CountrySelectField = ({ name, label, control, error, required = false, placeholder } : CountrySelectProps) => {
    
    const countries = [
        { label: 'United States', value: 'US' },
        { label: 'Thailand', value: 'TH' },
        { label: 'Japan', value: 'JP' },
        { label: 'Singapore', value: 'SG'},
        { label: 'United Kingdom', value: 'UK'}
    ];
    
    return (
        <div className="space-y-2">
            <Label htmlFor={name} className="">{label}</Label>

            <Controller 
                name={name}
                control={control}
                rules={{
                    required : required ? `Please select ${label}` : false
                }}
                render={({ field }) => (
                    <>
                    <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="select-trigger">
                            <SelectValue placeholder={placeholder} />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600 text-white">
                            {countries.map((country) => (
                                <SelectItem value={country.value} key={country.value} className="focus:bg-gray-600 focus:text-white">
                                    {country.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                        {error && <p className="text-sm text-red-500">{error.message}</p>}
                    </>
                )}
            />

           
        </div>
    )
}
export default CountrySelectField