import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("products").del();

  await knex("products").insert([
    { name: "Nhoque quatro queijos", price: 45 },
    { name: "Isca de frango", price: 60 },
    { name: "Pizza Marguerita", price: 50 },
    { name: "Hambúrguer artesanal", price: 35 },
    { name: "Lasanha bolonhesa", price: 55 },
    { name: "Sushi variado", price: 80 },
    { name: "Tábua de frios", price: 90 },
    { name: "Espaguete ao pesto", price: 42 },
    { name: "Risoto de camarão", price: 75 },
    { name: "Filé à parmegiana", price: 68 },
    { name: "Salada Caesar", price: 38 },
    { name: "Feijoada completa", price: 85 },
    { name: "Tacos mexicanos", price: 40 },
    { name: "Bife ancho", price: 95 },
    { name: "Ceviche peruano", price: 60 },
    { name: "Costela suína barbecue", price: 85 },
    { name: "Frango xadrez", price: 48 },
    { name: "Paella espanhola", price: 110 },
    { name: "Salmão grelhado", price: 70 },
    { name: "Escondidinho de carne seca", price: 50 },
    { name: "Panqueca de frango", price: 35 },
    { name: "Strogonoff de carne", price: 55 },
    { name: "Quiche de alho-poró", price: 40 },
    { name: "Mac and cheese", price: 45 },
    { name: "Caldo verde", price: 30 },
    { name: "Bobó de camarão", price: 88 },
    { name: "Carpaccio de carne", price: 48 },
    { name: "Empadão goiano", price: 52 },
    { name: "Polenta cremosa", price: 33 },
    { name: "Ratatouille", price: 47 },
    { name: "Bolinho de bacalhau", price: 42 },
  ]);
}
