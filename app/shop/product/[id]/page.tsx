import ProductDetailView from "@/features/detail/ProductDetailView";

interface DetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function Detail({ params }: DetailPageProps) {
    const { id } = await params;
    return (
        <ProductDetailView id={id} />
    )
}