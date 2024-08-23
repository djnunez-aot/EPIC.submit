"""Change proponent_id column type to integer

Revision ID: b79603b76ea0
Revises: a4785881834c
Create Date: 2024-08-20 15:17:44.896108

"""
import sqlalchemy as sa
from alembic import op


# revision identifiers, used by Alembic.
revision = 'b79603b76ea0'
down_revision = 'a4785881834c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('accounts', schema=None) as batch_op:
        batch_op.alter_column('proponent_id',
               existing_type=sa.VARCHAR(),
               type_=sa.Integer(),
               existing_nullable=False,
               postgresql_using='proponent_id::integer')

    with op.batch_alter_table('projects', schema=None) as batch_op:
        batch_op.alter_column('proponent_id',
               existing_type=sa.VARCHAR(),
               type_=sa.Integer(),
               existing_nullable=False,
               postgresql_using='proponent_id::integer')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    pass

    # ### end Alembic commands ###
