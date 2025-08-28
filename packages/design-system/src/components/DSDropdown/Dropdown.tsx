import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

/**
 * Styled container for the dropdown menu
 */
const DropdownContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: 16,
  boxShadow: `0px 0px 3px 1px ${theme.palette.background[200]}, 0px 0px 2px 0px ${theme.palette.background[100]}`,
}));


/**
 * Styled menu list
 */
const DropdownList = styled(MenuList)({
  padding: 0,
});


/**
 * Styled menu item with hover/selected states
 */
const DropdownItem = styled(MenuItem)(({ theme }) => {
  return {
  "&.Mui-selected": {
    backgroundColor: theme.palette.primary[100], 
    "&:hover": {
      backgroundColor: theme.palette.primary[200], 
    },
  },
  "&:hover": {
    backgroundColor: theme.palette.primary[100], 
  },
  "&:first-of-type": {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  "&:last-of-type": {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  "&:not(:first-of-type):not(:last-of-type)": {
    borderRadius: 0,
  },
}
});

interface DropdownItems {
  id: string | number;
  label: string;
  leftIcons?: React.ComponentType<any>[];
  rightIcon?: React.ComponentType<any>;
  selected?: boolean;
  leftIconColors?: string[];
  rightIconColor?: string;
  padding?: 16
}

export interface CustomDropdownProps {
  items?: DropdownItems[];
  onSelect?: (item: DropdownItems) => void;
}

/**
 * Reusable dropdown component
 * @param {Array} items - list of items { id, label, leftIcons, rightIcon, selected }
 */
export function CustomDropdown({ items = [], onSelect }: CustomDropdownProps) {
  const theme = useTheme();
  return (
    <DropdownContainer>
      <DropdownList>
        {items.map((item) => (
          <DropdownItem
            key={item.id}
            selected={item.selected}
            onClick={() => onSelect?.(item)}
          >
            {/* Left icons */}
            {item.leftIcons && item.leftIcons.length > 0 &&
              item.leftIcons.map((Icon, idx) => (
                <ListItemIcon
                  key={idx}
                >
                  <Icon 
                    sx={{ color: item.leftIconColors?.[idx] || "inherit" }}
                  />
                </ListItemIcon>
              ))}

            {/* Text */}
            <ListItemText
              primary={item.label}
              sx={{ 
                color: theme.palette.text.primary,
                '& .MuiListItemText-primary': {
                  color: theme.palette.text.primary,
                }
              }}
            />

            {/* Right icon */}
            {item.rightIcon && (
              <ListItemIcon
                sx={{
                  minWidth: 32,
                  justifyContent: "flex-end",
                }}
              >
                {(() => {
                  const Icon = item.rightIcon;
                  return <Icon sx={{ color: item.rightIconColor || "inherit" }} />;
                })()}
              </ListItemIcon>
            )}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
}