'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { IPost } from './types';

const prisma = new PrismaClient();

export const getPostListAction = async (): Promise<Array<IPost>> => {
  try {
    return await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const getUserPostListAction = async ({
  userId,
}: {
  userId: string | null;
}): Promise<Array<IPost>> => {
  try {
    return await prisma.post.findMany({
      where: {
        userId: userId as string,
      },
    });
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

/**
 * Creates a new todo item.
 *
 * @param {Object} params - The parameters object.
 * @param {string} params.title - The title of the todo item.
 * @param {string | undefined} params.description - The description or description of the todo item.
 * @param {boolean} params.isCompleted - Indicates whether the todo item is isCompleted or not.
 * @param {string | null} params.userId - The ID of the user creating the todo item.
 * @returns {Promise<void>} - A promise that resolves when the todo item is successfully created.
 * @throws {Error} - Throws an error if something goes wrong during the creation process.
 */
export const createPostAction = async ({
  title,
  userId,
}: IPost): Promise<void> => {
  try {
    await prisma.post.create({
      data: {
        title,
        userId: userId as string,
      },
    });

    revalidatePath('/');
  } catch (error) {
    console.log(error);

    throw new Error('Something went wrong');
  }
};

/**
 * Deletes a todo item.
 *
 * @param {Object} params - The parameters object.
 * @param {string} params.id - The ID of the todo item to be deleted.
 * @returns {Promise<void>} - A promise that resolves when the todo item is successfully deleted.
 */
// export const deleteTodoAction = async ({
//   id,
// }: {
//   id: string;
// }): Promise<void> => {
//   await prisma.post.delete({
//     where: {
//       id,
//     },
//   });

//   revalidatePath('/');
// };

/**
 * Updates a todo item.
 *
 * @param {ITodo} params - The parameters object containing the todo item details.
 * @param {string} params.id - The ID of the todo item to be updated.
 * @param {string} params.title - The updated title of the todo item.
 * @param {string | undefined} params.description - The updated description or description of the todo item.
 * @param {boolean} params.isCompleted - Indicates whether the todo item is isCompleted or not.
 * @returns {Promise<void>} - A promise that resolves when the todo item is successfully updated.
 * @throws {Error} - Throws an error if something goes wrong during the update process.
 */
// export const updateTodoAction = async ({
//   id,
//   title,
//   description,
//   isCompleted,
// }: ITodo): Promise<void> => {
//   try {
//     await prisma.post.update({
//       where: {
//         id,
//       },
//       data: {
//         title,
//         description,
//         isCompleted,
//       },
//     });

//     revalidatePath('/');
//   } catch (error) {
//     throw new Error('Something went wrong');
//   }
// };

// ************** news api ************** \\

export const getNewsApiAction = async (): Promise<any> => {
  try {
    return await prisma.news.findMany({});
  } catch (error) {
    console.log(error);

    throw new Error('Something went wrong');
  }
};
