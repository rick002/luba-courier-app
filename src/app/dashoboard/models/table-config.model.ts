export interface TableConfig {
    name: string;
    title: string;
    width?: number;
}

export const TABLE_CONFIG: TableConfig[] = [
    {name: 'description', title: 'description', width: 100},
    {name: 'courier', title: 'courier', width: 85},
    {name: 'courierTracking', title: 'courier tracking', width: 120},
    {name: 'internalTracking', title: 'internal tracking', width: 120},
    {name: 'priceToPay', title: 'price to pay', width: 100},
    {name: 'weight', title: 'weight', width: 85},
    {name: 'supplier', title: 'supplier', width: 85},
    
];
