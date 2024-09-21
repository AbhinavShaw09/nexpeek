
// searchBar.tsx
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

interface DataItem {
  id: number;
  companyName: string;
  ideas: number;
}

interface SearchBarProps {
  data: DataItem[];
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ data, handleInputChange }: SearchBarProps) => {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        onInputChange={handleInputChange} 
        options={data.map((option) => option.companyName)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Companies"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  );
};

export default SearchBar;